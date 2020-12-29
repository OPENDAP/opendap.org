import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq-search',
  templateUrl: './faq-search.component.html',
  styleUrls: ['./faq-search.component.scss']
})
export class FaqSearchComponent implements OnChanges {
  @Input() data: any;
  @Input() query: string;

  results = new Set();

  queryForm = new FormGroup({
    query: new FormControl({ value: null, disabled: false })
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.query && this.query) {
      this.queryForm.controls.query.setValue(this.query);
      this.search();
    }
  }

  search(): void {
    if (this.queryForm.valid) {
      this.results.clear();

      const keys = Object.keys(this.data);

      for (const sectionKey of keys) {
        const section = this.data[sectionKey];

        for (const article of section) {
          out:
          for (const tag of article.tags) {
            if (this.queryForm.controls.query.value.toLowerCase().includes(tag)) {
              this.results.add(article);
              break out;
            }
          }
        }
      }
    }
  }
}
