import { Component, OnInit } from '@angular/core';

import { DataReaderService } from '../shared/services/data-reader.service';

@Component({
  selector: 'app-faq',
  template: `
  <div class="body">
    <h1>How can we help you?</h1>

    <app-faq-search *ngIf="data" [data]="data"></app-faq-search>

    <h1>Frequently Asked Questions</h1>
    <mat-tab-group dynamicHeight>
        <mat-tab *ngFor="let key of keys" [label]="key | titlecase">
            <app-faq-section [faqSection]="data[key]"></app-faq-section>
        </mat-tab>
    </mat-tab-group>
  </div>
  `,
  styles: [`
    .body {
        padding-top: 4em;

        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        text-align: center;
        margin-bottom: 2.5em;
        margin-top: 3em;
    }

    p {
        font-size: 15px !important;
    }
  `]
})
export class FaqComponent implements OnInit {
  data: any;

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit(): void {
    this.dataReaderService.getFAQData().subscribe(data => {
      this.data = data;
    });
  }

  get keys(): string[] {
    return this.data ? Object.keys(this.data) : [];
  }
}
