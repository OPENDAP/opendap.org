import { Component } from '@angular/core';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';

@Component({
  selector: 'app-documentation',
  template: `
    <div id="body" class="manual-body">
      <div class="toc-panel">
        <app-toc-level [node]="parentNode"></app-toc-level>
      </div>
      <div id="manual-content" class="manual-content"><div>
    </div>
  `,
  styleUrls: ['documentation.component.scss']
})
export class DocumentationComponent {

  public parentNode = {
    level: 1,
    id: 'toc',
    text: 'Table of Contents',
    children: new Array<any>()
  };

  constructor(public dataReaderService: DataReaderService) {
    this.dataReaderService.getHyraxGuide().subscribe((response: any) => {
      const fullGuide: HTMLDivElement = document.createElement('div');
      fullGuide.innerHTML = response.data;

      const guide = this.extractContent(fullGuide);
      this.replaceIcons(guide);
      this.extractTOC(guide);

      document.getElementById('manual-content').innerHTML = guide.innerHTML;
    }, error => {
      console.log(error);
    });
  }

  private extractContent(fullGuide: HTMLDivElement): HTMLDivElement {
    const tags = fullGuide.getElementsByTagName('*');

    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === 'content') {
        return (tags[i] as HTMLDivElement);
      }
    }
  }

  private extractTOC(content: HTMLDivElement): void {
    const tags = content.getElementsByTagName('*');

    const headingTags = new Array<any>();

    for (let i = 0; i < tags.length; i++) {
      if (tags[i].tagName.startsWith('H') && !tags[i].tagName.endsWith('R')) {
        headingTags.push({
          level: Number.parseInt(tags[i].tagName.substring(1), 10),
          id: tags[i].id,
          text: tags[i].textContent,
          children: new Array<any>()
        });
      }
    }

    this.buildTree(this.parentNode, headingTags);
  }

  private buildTree(parent: any, children: Array<any>): any {
    do {
      const child = children.shift();

      if (child && child.level === parent.level + 1) {
        parent.children.push(this.buildTree(child, children));
      } else {
        children.unshift(child);
        return parent;
      }
    } while (children.length > 0);
  }

  private replaceIcons(guide: HTMLDivElement): void {
    const icons = guide.getElementsByClassName('icon');
    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i].firstElementChild;

      if (icon.classList.contains('icon-note')) { this.replaceIcon(icon, 'sticky_note_2'); }
      else if (icon.classList.contains('icon-tip')) { this.replaceIcon(icon, 'school'); }
      else if (icon.classList.contains('icon-warning')) { this.replaceIcon(icon, 'warning', 'warn'); }
      else if (icon.classList.contains('icon-important')) { this.replaceIcon(icon, 'info', 'tip'); }
      else if (icon.classList.contains('icon-caution')) { this.replaceIcon(icon, 'assignment_late', 'warn'); }
    }
  }

  private replaceIcon(icon: any, iconName: string, color = 'primary'): void {
    const newIcon = document.createElement('span');
    newIcon.classList.add('material-icons');
    newIcon.classList.add(color);
    newIcon.appendChild(document.createTextNode(iconName));

    const parent = icon.parentElement;
    parent.removeChild(icon);
    parent.appendChild(newIcon);
  }
}
