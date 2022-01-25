import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataReaderService } from 'src/app/services/data-reader.service';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  public query: string;

  public data: any;
  public headings: {title: string, id: string}[];

  private _routeSub: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _dataReaderService: DataReaderService
  ) { }

  ngOnInit(): void {
    this._routeSub = this._route.params.subscribe(data => {
      this.query = data.query;
      this.getContent(data.query);
    });
  }

  private getContent(pageId: string) {
    this._dataReaderService.getPage(pageId).subscribe(data => {
      this.data = data;

      this.headings = [];

      for (const section of this.data.sections) {
        if (this.data.pageTitle !== section.title && !section.hideTitle) {
          this.headings.push({
            title: section.title,
            id: section.id
          });
        }
      }
    }, error => {

    });
}


  ngOnDestroy(): void {
    this._routeSub.unsubscribe();
  }
}
