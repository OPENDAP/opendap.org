import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent implements OnInit {

  @Input() menu: any;
  @Input() subMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
