import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toc-level',
  template: `
  <div>
    <div class="toc" (mouseenter)="showActions(true)" (mouseleave)="showActions(false)">
      <mat-icon class="icon" (click)="hideChildren()">
        {{ arrowIcon }}
      </mat-icon>
      <div class="text" (click)="followLink(node)">
        <a [href]="'/#' + node.id">
          {{ node.levelNum }}
          {{node.displayText}}
        </a>
      </div>
    </div>
    <div #child [style]="leftMargin">
      <app-toc-level
        *ngFor="let node of node.children"
        [node]="node">
        <!-- Children -->
      </app-toc-level>
    </div>
  </div>
  `,
  styleUrls: ['toc-level.component.scss']
})
export class TocLevelComponent {
  @Input() node: any;

  @ViewChild('child') content: any;
  @ViewChild('actions') actions: any;

  public show = true;

  get leftMargin(): string {
    return `padding-left:${this.node.level * 7}px`;
  }

  get showArrow(): boolean {
    return this.node.children.length > 0;
  }

  get arrowIcon(): string {
    return this.showArrow ? this.show ? 'expand_more' : 'chevron_right' : '';
  }

  hideChildren(): void {
    this.show = !this.show;
    this.content.nativeElement.style.display = this.show ? null : 'none';
  }

  followLink(node: any): void {
    console.log(node);
  }

  showActions(show: boolean): void {
    // this.actions.nativeElement.style.display = show ? null : 'none';
  }
}
