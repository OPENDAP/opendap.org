import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaqSection } from 'src/app/shared/models/faq.model';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';

@Component({
  selector: 'app-single-faq',
  templateUrl: './single-faq.component.html',
  styleUrls: ['./single-faq.component.scss']
})
export class SingleFaqComponent implements OnInit {

  @Input() showHeading = true;
  @Input() faqArticle: FaqSection;

  constructor(
    private route: ActivatedRoute,
    private dataReaderService: DataReaderService
  ) { }

  ngOnInit(): void {
    if (this.showHeading) {
      this.route.params.subscribe(params => {
        this.dataReaderService.getFAQPage( params.article).subscribe(response => {
          this.faqArticle = response;
        });
      });
    }
  }

  public getFaqUrl(articleID: string): string {
    return `https://www.opendap.org/support/faq/${articleID}`;
  }
}
