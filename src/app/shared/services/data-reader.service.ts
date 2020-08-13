import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Versions } from '../models/versions';
import { HKVersionResponse } from '../models/hkVersions';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  production = false;

  serverURL: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPage(pageID: string): Observable<any> {
    return this.http.get<any>(`/api/content/${pageID}`);
  }

  getAboutUsPage(): Observable<any> {
    return this.http.get<any>(`/api/content/about-us`);
  }

  getSoftwarePage(): Observable<any> {
    return this.http.get<any>(`/api/content/software`);
  }

  getReleaseData(): Observable<Versions> {
    return this.http.get<Versions>(`/api/versions`);
  }

  getFAQData(): Observable<any> {
    return this.http.get<any>(`/api/content/faq`);
  }

  getFAQPage(pageTitle: string): Observable<any> {
    return this.http.get<any>(`/api/content/faq/${pageTitle}`)
  }

  getSupportData(): Observable<any> {
    return this.http.get<any>(`/api/content/support`);
  }

  getVersionPageData(version: string): Observable<any> {
    return this.http.get<Versions>(`/api/versions/${version}`);
  }

  getLatestVersion(): Observable<any> {
    return this.http.get<any>(`/api/versions/latest`);
  }

  getHKVersions(): Observable<HKVersionResponse> {
    return this.http.get<HKVersionResponse>('http://localhost:3001/api/jira/HK/versions');
  }

  getIssue(key: string): Observable<JiraIssue> {
    return this.http.get<JiraIssue>(`http://localhost:3001/api/jira/${key}`)
  }

  getBugFixData(fixVersion: string): Observable<JiraTicket> {
    return this.http.get<JiraTicket>(`http://localhost:3001/api/jira/HK/versions/${fixVersion}`);
  }
}

export class JiraTicket {
  body: {
    startAt: number;
    total: number;
    issues: Issue[];
  }
}

export class JiraIssue {
  body: Issue;
}

export class Issue {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: {
    description: string;
    summary: string;
    fixVersions: FixVersion[];
  };
}

export class FixVersion {
  id: string;
  name: string;
  releasedDate: string;
  released: boolean;
  self: string;
}
