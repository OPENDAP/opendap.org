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
  @Input() scrollOffset = 25;

  activeSection: any;

  constructor() {
    window.addEventListener('scroll', () => {
      for (let i = 0; i < this.headings.length; i++) {
        if (document.getElementById(this.headings[i].id) !== null) {
          if (this.headings[i + 1] === undefined) {
            this.activeSection = this.headings[i];
            break;
          }

          let a = window.scrollY + this.scrollOffset + 15 > document.getElementById(this.headings[i].id).offsetTop;
          let b = window.scrollY + this.scrollOffset + 15 < document.getElementById(this.headings[i + 1].id).offsetTop;

          if (a && b) {
            this.activeSection = this.headings[i];
            break;
          }
        }
      }
    });
  }

  public scrollIntoView(heading: Heading) {
    this.activeSection = heading;

    window.scrollTo({
      top: document.getElementById(heading.id).offsetTop - this.scrollOffset,
      behavior: 'smooth'
    });
  }

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
