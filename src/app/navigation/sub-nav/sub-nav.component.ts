import { Component, Input, OnInit } from '@angular/core';
import { Heading } from 'src/app/shared/components/adoc-template/adoc-template.component';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent  {
  @Input() pageTitle: string;
  @Input() headings: Heading[];

  constructor() { }
}
