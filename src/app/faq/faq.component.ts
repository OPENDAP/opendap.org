import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FaqSection } from '../shared/models/faq.model';
import { DataReaderService } from '../shared/services/data-reader.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  private faqData: FaqSection[][];

  public searchResults: Set<FaqSection>;

  queryForm = new FormGroup({
    query: new FormControl({ value: null, disabled: false })
  });

  constructor(public dataReaderService: DataReaderService) {
    this.dataReaderService.getFAQData().subscribe(data => {
      this.faqData = data;
    });
  }

  get general(): FaqSection[] {
    return this.faqData && this.faqData.length > 0 ? this.faqData[0] : null;
  }

  get clientIssues(): FaqSection[] {
    return this.faqData && this.faqData.length > 1 ? this.faqData[1] : null;
  }

  get serverIssues(): FaqSection[] {
    return this.faqData && this.faqData.length > 2 ? this.faqData[2] : null;
  }

  get developers(): FaqSection[] {
    return this.faqData && this.faqData.length > 3 ? this.faqData[3] : null;
  }

  get numSearchResults(): number {
    return this.searchResults ? this.searchResults.size : -1;
  }

  public search(): void {
    if (!this.searchResults) {
      this.searchResults = new Set<FaqSection>();
    } else {
      this.searchResults.clear();
    }

    if (this.queryForm.controls.query.value) {
      this.faqData.forEach(section => {
        for (const article of section) {
          out:
          for (const tag of article.tags) {
            if (this.queryForm.controls.query.value.toLowerCase().includes(tag)) {
              this.searchResults.add(article);
              break out;
            }
          }
        }
      });
    }
  }

  public copyFaqUrl(articleID: string): void {
    console.log(articleID);
  }

  public openInNewTab(articleID: string): void {

  }
}
