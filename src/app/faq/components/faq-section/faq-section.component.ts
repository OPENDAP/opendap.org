import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataReaderService } from '@shared/services/data-reader.service';

import { FaqSectionModel } from '@faq/models/faqSection.model';

@Component({
  selector: 'app-faq-section',
  template: `
    <div class="faq">
      <h1 *ngIf="title && loadedFromURL">{{ title }}</h1>

      <app-markdown-div [innerHTML]="body"></app-markdown-div>

      <h2>Tags</h2>

      <mat-chip-list aria-label="Tags">
        <mat-chip *ngFor="let tag of tags">
          <a [routerLink]="queryUrl(tag)">{{ tag }}</a>
        </mat-chip>
      </mat-chip-list>

      <div class="actions">
        <button mat-icon-button [cdkCopyToClipboard]="link">
          <mat-icon color="primary">link</mat-icon>
        </button>

        <a *ngIf="!loadedFromURL" [routerLink]="routerLink" target="_blank">
          <button mat-icon-button>
            <mat-icon color="primary">open_in_new</mat-icon>
          </button>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnChanges {
  @Input() faqSection: FaqSectionModel;

  public loadedFromURL = true;

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService) {
    this.route.params.subscribe(params => {
      if (params.article) {
        this.dataReaderService.getFAQPage(params.article).subscribe(data => {
          this.faqSection = data;
        });
      }
    });
  }

  ngOnChanges(): void { this.loadedFromURL = false; }

  get title(): string {
    return this.faqSection && this.faqSection.title ?
      this.faqSection.title : '';
  }

  get body(): string {
    return this.faqSection && this.faqSection.md ?
      this.faqSection.md : '';
  }

  get tags(): string[] {
    return this.faqSection && this.faqSection.tags ?
      this.faqSection.tags : [];
  }

  get link(): string {
    return `This doesn't work yet. But it will. I promise.`;
  }

  get routerLink(): string {
    return this.faqSection && this.faqSection.url ?
      `/support/faq/${this.faqSection.url}` : '';
  }

  public queryUrl(tag: string): string {
    return `/support/faq/search/${tag}`;
  }
}
