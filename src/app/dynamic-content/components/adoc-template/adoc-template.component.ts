import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataReaderService } from 'src/app/services/data-reader.service';

export interface Heading {
  title: string;
  id: string;
}

@Pipe({ name: 'safe' })
export class SafeHtml implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html: string): any {
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
  // @Input() headings: Set<Heading>;

  public headings: Heading[] = [];

  constructor(private _dataReaderService: DataReaderService) { }

  ngOnInit(): void {
    if (this.pageID) {
      this._dataReaderService.getPage(this.pageID).subscribe(data => {
        this.pageData = data;

        // for (const section of this.pageData.sections) {
        //   if (this.pageData.pageTitle !== section.title && !section.hideTitle) {
        //     this.headings.push({
        //       title: section.title,
        //       id: section.id
        //     });
        //   }
        // }
      }, error => {

      }, () => {

      });
    }
  }

  public processHeadings(newHeading: Heading): void {
    const exists = this.headings.find(heading => heading.id === newHeading.id);
    if (!exists) {
      this.headings.push(newHeading);
    }
  }
}
