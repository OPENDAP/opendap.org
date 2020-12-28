import { Component, Input, OnInit } from '@angular/core';
import { DataReaderService } from '../../services/data-reader.service';

@Component({
  selector: 'app-adoc-template',
  templateUrl: './adoc-template.component.html',
  styleUrls: ['./adoc-template.component.scss']
})
export class AdocTemplateComponent implements OnInit {
  @Input() pageID: string;

  data: any;
  headings: any[];

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit(): void {
    this.dataReaderService.getPage(this.pageID).subscribe(data => {
      this.data = data;

      this.headings = [];

      for (const thisData of this.data.sections) {
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
