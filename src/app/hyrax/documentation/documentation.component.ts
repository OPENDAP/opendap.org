import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';

@Component({
  selector: 'app-documentation',
  template: `
    <!-- <iframe
      id="documentation"
      src="https://opendap.github.io/hyrax_guide/Master_Hyrax_Guide.html"
      title="The Hyrax Data Server Installation and Configuration Guide">
    </iframe> -->
    <div [innerHTML]="guide"></div>
  `,
  styles: [`
    iframe {
      margin-top: 50px;
      border: 0;
      width: 100%;
    }
  `]
})
export class DocumentationComponent {

  guide: string;

  constructor(public dataReaderService: DataReaderService) {
    this.dataReaderService.getHyraxGuide().subscribe((response: any) => {
      console.log(response);
      this.guide = response.data;
    }, error => {
      console.log(error);
    });
  }
}
