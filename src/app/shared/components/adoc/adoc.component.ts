import { Component, Input, OnInit } from '@angular/core';
import { DataReaderService } from '../../services/data-reader.service';

@Component({
  selector: 'app-adoc',
  templateUrl: './adoc.component.html',
  styleUrls: ['./adoc.component.scss']
})
export class AdocComponent implements OnInit {
  loading = true;
  errored = false;

  data: any;

  constructor(public dataReader: DataReaderService) {
    this.dataReader.getAdoc('about-us').subscribe(data => {
      this.data = data;
    }, error => {
      console.log(error);
      this.errored = true;
    }, () => {
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
