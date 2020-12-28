import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-div',
  templateUrl: './markdown-div.component.html',
  styleUrls: ['./markdown-div.component.scss']
})
export class MarkdownDivComponent {
  @Input() innerHTML: string;

  constructor() { }
}
