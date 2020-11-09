import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataReaderService } from '../../services/data-reader.service';

@Component({
  selector: 'app-adoc',
  templateUrl: './adoc.component.html',
  styleUrls: ['./adoc.component.scss']
})
export class AdocComponent implements OnInit {
  @Input() pageName: string;

  loading = true;

  data: any;

  constructor(
    public dataReader: DataReaderService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.dataReader.getAdoc(this.pageName).subscribe(data => {
      this.data = data;
    }, () => {
      this.router.navigate(['/404']);
    }, () => {
      this.loading = false;
    });
  }
}
