export class VersionData {
    fixVersion: string;
    newFeatures: NewFeature[];
    bugFixes: BugFixes[];
}

export class NewFeature {
    title: string;
    body: string;
}

export class BugFixes {
    url: string;
    key: string;
    text: string;
}
