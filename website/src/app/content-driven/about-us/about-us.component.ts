import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `<app-markdown-module pageID="about-us"></app-markdown-module>`,
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
