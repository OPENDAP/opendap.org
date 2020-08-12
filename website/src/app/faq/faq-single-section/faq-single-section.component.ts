import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';

@Component({
  selector: 'app-faq-single-section',
  templateUrl: './faq-single-section.component.html',
  styleUrls: ['./faq-single-section.component.scss']
})
export class FaqSingleSectionComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataReaderService.getFAQPage(params.article).subscribe(data => {
        this.data = data;
      });
    });
  }
}
