import { Component, Input, OnInit, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataReaderService } from '../../services/data-reader.service';

export class Heading {
  title!: string;
  id!: string;
}

@Pipe({name: 'safe'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
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
  @Input() pageData: any;
  @Input() headings: Heading[];

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit(): void {
    if (this.pageID) {
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
}
