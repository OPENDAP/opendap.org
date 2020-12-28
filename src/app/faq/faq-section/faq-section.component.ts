import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';

import { FaqSectionModel } from 'src/app/shared/models/faqSection.model';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent implements OnChanges {
  @Input() faqSection: FaqSectionModel;

  public loadedFromURL = true;

  public tagRouterLink = 'support/faq/tag/';

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService) {
    this.route.params.subscribe(params => {
      if (params.article) {
        this.dataReaderService.getFAQPage(params.article).subscribe(data => {
          this.faqSection = data;
          console.log(data);
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
}
