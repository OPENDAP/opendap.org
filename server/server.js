const express = require('express');
const fs = require('fs');
const http = require('http');
const path = require('path');
const request = require('request');
const showdown = require('showdown');

const converter = new showdown.Converter();

const app = express();
app.use(express.static(__dirname + '/dist/website'));

app.get('', (req, res) => {
    res.sendFile(path.resolve('./dist/website/index.html'));
});

app.get('/api/content/about-us', (req, res) => {
    res.status(200).send(parseConfigFile('about-us'));
});

app.get('/api/content/software', (req, res) => {
    res.status(200).send(parseConfigFile('software'));
});

app.get('/api/content/support', (req, res) => {
    res.status(200).send(parseConfigFile('support'));
});

function parseConfigFile(pageID) {
    let fileData = JSON.parse(fs.readFileSync(`public/site/${pageID.toLowerCase()}/${pageID.toLowerCase()}.config.json`, 'utf8'));

    for (let thisSection of fileData.sections) {
        if (thisSection.sectionType === "standard") {
            parseStandardSection(fileData.root, thisSection);
        } else if (thisSection.sectionType === "tabbed") {
            parseTabbedSection(fileData.root, thisSection);
        }
    }

    return fileData;
}

function parseStandardSection(root, section) {
    section.parsedFile = processMarkdownFile(fs.readFileSync(path.join(root, section.filename), 'utf8'));
}

function parseTabbedSection(root, section) {
    for (let thisTab of section.tabs) {
        thisTab.parsedFile = processMarkdownFile(fs.readFileSync(path.join(root, thisTab.filename), 'utf8'));
    }
}

/**
 * Returns and parses the files in the FAQ folder.
 */
app.get('/api/content/faq', (req, res) => {
    let files = fs.readdirSync('public/Site/support/faq');
    let toReturn = [];

    for (const thisDir of files) {
        let thisFAQSection = [];

        for (const thisFAQ of fs.readdirSync(`public/Site/support/faq/${thisDir}`)) {
            let faqSection = fs.readFileSync(`public/Site/support/faq/${thisDir}/${thisFAQ}`, 'utf8');
            thisFAQSection.push(processMarkdownFile(faqSection));
        }

        toReturn.push(thisFAQSection);
    }

    res.status(200).send(toReturn);
});

app.get('/api/content/faq/:articleTitle', (req, res) => {
    let fileName = `${req.params['articleTitle']}.md`;

    let files = fs.readdirSync('public/Site/support/faq');

    for (const thisDir of files) {

        let faqSection = fs.readdirSync(`public/Site/support/faq/${thisDir}`);

        if (faqSection.includes(fileName)) {
            let file = fs.readFileSync(`public/Site/support/faq/${thisDir}/${fileName}`, 'utf8');
            res.status(200).send(processMarkdownFile(file));
        }
    }

    res.status(404).send("Not found");
});

/**
 * Processes a markdown file by splitting the title out of the document
 * and converting the body to HTML with showdown.
 * @param {string} md The markdown file to be processed.
 */
function processMarkdownFile(md, id = 0) {
    let split = md.split("\n")[0];
    let title = split.substring(2, split.length - 1);
    let mds = md.substring(split.length + 3, md.length);
    let tags = md.split("##TAGS##");

    if (tags.length == 2) {
        mds = tags[0].substring(split.length + 3, md.length);;
        tags = tags[1].substr(2, tags[1].length).split(",");
    } else {
        tags = [];
    }

    return ({
        title: title,
        md: converter.makeHtml(mds),
        id: title.replace(/ /g, "-").toLowerCase(),
        tags: tags
    });
}

/**
 * Returns all the versions of Hyrax that are currently on the server.
 */
app.get('/api/versions', (req, res) => {
    fs.readdir('public/Hyrax', (err, files) => {
        if (err) throw err;

        res.status(200).send({
            versions: files
        });
    });
});

/**
 * Returns the latest version of Hyrax that is currently on the server.
 */
app.get('/api/versions/latest', (req, res) => {
    fs.readdir('public/Hyrax', (err, files) => {
        if (err) throw err;
        getSpecificVersion(files.sort()[files.length - 1], res);
    });
});

/**
 * Returns a specific version of Hyrax from the server.
 */
app.get('/api/versions/:version', (req, res) => {
    getSpecificVersion(req.params['version'], res);
});

/**
 * Returns a specific version of Hyrax data from the server.
 * @param {string} requestedVersion The version that the api will serve.
 * @param {response} res The response that will serve the data.
 */
function getSpecificVersion(requestedVersion, res) {
    fs.readdir(`public/Hyrax/${requestedVersion}`, (err, files) => {
        if (err) throw err;

        allVersionFiles = {
            hyraxVersion: requestedVersion,
            versions: [],
            download: null,
            installation: null
        };

        for (let f of files) {
            let thisFile = fs.readFileSync(path.join('public', "Hyrax", requestedVersion, f), 'utf8');

            if (f.includes("download")) {

                let sections = thisFile.split("#SPLIT#");
                sections.shift();

                allVersionFiles.download = sections;
            } else if (f.includes("installation")) {
                allVersionFiles.installation = thisFile;
            } else {
                allVersionFiles.versions.push(JSON.parse(thisFile));
            }
        }

        res.status(200).send(allVersionFiles);
    });
}

/**
 * Returns a Jira issue from OPeNDAP's Jira server.
 */
app.get('/api/jira/:issue', (req, res) => {
    request(`https://opendap.atlassian.net/rest/api/2/issue/${req.params['issue']}`, { json: true }, (err, thisRes) => {
        if (err) throw err;

        res.status(200).send(thisRes);
    });
});

/**
 * Returns the HK versions from OPeNDAP's Jira server.
 */
app.get('/api/jira/HK/versions', (req, res) => {
    request('https://opendap.atlassian.net/rest/api/2/project/HK/versions', { json: true }, (err, thisRes) => {
        if (err) throw err;

        res.status(200).send(thisRes);
    });
});

/**
 * Returns all of the issues in a specific fix version
 * from OPeNDAP's Jira server.
 */
app.get('/api/jira/HK/versions/:fixVersionID', (req, res) => {
    let search = `search?jql=project=HK AND fixversion=${req.params['fixVersionID']}`;
    let url = `https://opendap.atlassian.net/rest/api/2/${search}`;

    request(url, { json: true }, (err, thisRes) => {
        if (err) throw err;

        res.status(200).send(thisRes);
    });
});

http.createServer(app).listen(3001, () => {
    console.log('Server running on port 3001.')
});
