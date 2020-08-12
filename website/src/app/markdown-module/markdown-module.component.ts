import { Component, OnInit, Input } from '@angular/core';
import { DataReaderService } from '../shared/services/data-reader.service';

@Component({
  selector: 'app-markdown-module',
  templateUrl: './markdown-module.component.html',
  styleUrls: ['./markdown-module.component.scss']
})
export class MarkdownModuleComponent implements OnInit {
  @Input() pageID: string;

  data: any;
  headings: any[];

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit(): void {
    this.dataReaderService.getPage(this.pageID).subscribe(data => {
      this.data = data;

      this.headings = [];

      for (let thisData of this.data.sections) {
        this.headings.push({
          title: thisData.title,
          id: thisData.id
        });
      }
    }, error => {

    }, () => {

    });
  }
}
