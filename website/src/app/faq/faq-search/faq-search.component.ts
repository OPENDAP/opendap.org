import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq-search',
  templateUrl: './faq-search.component.html',
  styleUrls: ['./faq-search.component.scss']
})
export class FaqSearchComponent {
  @Input() data: any;

  results = new Set();

  queryForm = new FormGroup({
    query: new FormControl({ value: null, disabled: false }, [
      Validators.required, Validators.minLength(1)])
  });

  search(): void {
    if (this.queryForm.valid) {
      this.results.clear();

      for (const section of this.data) {
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
