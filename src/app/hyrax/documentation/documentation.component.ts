import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  template: `
    <iframe
      id="documentation"
      src="https://opendap.github.io/hyrax_guide/Master_Hyrax_Guide.html"
      title="The Hyrax Data Server Installation and Configuration Guide">
    </iframe>
  `,
  styles: [`
    iframe {
      margin-top: 50px;
      border: 0;
      width: 100%;
    }
  `]
})
export class DocumentationComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const iFrame = document.getElementById('documentation');
    console.log(iFrame);
  }
}
