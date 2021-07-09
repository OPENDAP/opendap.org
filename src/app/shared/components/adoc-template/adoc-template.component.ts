import { Component, Input, OnInit } from '@angular/core';
import { DataReaderService } from '../../services/data-reader.service';

export class Heading {
  title!: string;
  id!: string;
}

@Component({
  selector: 'app-adoc-template',
  templateUrl: './adoc-template.component.html',
  styleUrls: [
    './adoc-template.component.scss',
    '../../sass/adoc-simple.scss'
  ]
})
export class AdocTemplateComponent implements OnInit {
  @Input() pageID: string;

  pageData: any;
  headings: Heading[];

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit(): void {
    this.dataReaderService.getPage(this.pageID).subscribe(data => {
      this.pageData = data;

      this.headings = [];

      for (const section of this.pageData.sections) {
        if (this.pageData.pageTitle !== section.title && !section.hideTitle) {
          this.headings.push({
            title: section.title,
            id: section.id
          });
        }
      }
    }, error => {

    }, () => {

    });
  }
}
