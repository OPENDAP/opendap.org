import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataReaderService } from 'src/app/services/data-reader.service';
import { Heading } from '../adoc-template/adoc-template.component';

@Component({
  selector: 'app-adoc',
  templateUrl: './adoc.component.html',
  styleUrls: [
    './adoc.component.scss',
    '../../sass/adoc-simple.scss'
  ]
})
export class AdocComponent implements OnInit, AfterViewInit {
  @Input() pageName: string;
  @Input() content: string;

  @Output() headings = new EventEmitter<Heading>();

  loading = true;

  data: any;

  constructor(
    public dataReader: DataReaderService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    const h2 = document.getElementsByTagName('h2');
    Array.from(h2).forEach(item => {
      item.id = item.innerText.replace(/ /g, '-').toLowerCase();
      this.headings.emit({
        id: item.id,
        title: item.innerText
      });
    });
  }

  public ngOnInit(): void {
    if (this.pageName) {
      this.dataReader.getAdoc(this.pageName).subscribe(data => {
        this.data = data;
      }, error => {
        console.error(error);
        this.router.navigate(['/404']);
      }, () => {
        this.loading = false;
      });
    }
  }
}
