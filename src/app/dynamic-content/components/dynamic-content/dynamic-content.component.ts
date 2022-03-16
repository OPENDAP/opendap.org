import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataReaderService } from 'src/app/services/data-reader.service';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnDestroy {
  public query: string;

  public data: any;
  public headings: { title: string, id: string }[];

  private _routeSub: Subscription;

  constructor(
    private _dataReaderService: DataReaderService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._routeSub = this._route.params.subscribe(data => {
      this.query = data.query;
      this._getContent(data.query);
    });
  }

  private _getContent(pageId: string): void {
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
      console.error(error);
      this._router.navigate(['/404']);
    });
  }

  ngOnDestroy(): void {
    this._routeSub.unsubscribe();
  }
}
