import { Component } from '@angular/core';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';
import { TocNode } from './models/toc-node.model';

@Component({
  selector: 'app-documentation',
  template: `
    <div id="body" class="manual-body">
      <div class="toc-panel">
        <app-toc-level [node]="parentNode"></app-toc-level>
      </div>
      <div class="adoc-body">
        <div class="inner-div">
        <h1>The Hyrax Data Server Installation and Configuration Guide</h1>
        <div id="manual-content"></div>
        </div>
      <div>
    </div>
  `,
  styleUrls: ['documentation.component.scss']
})
export class DocumentationComponent {

  public parentNode: TocNode = new TocNode(1, 'toc', 'Table of Contents');

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

    const headingTags = new Array<TocNode>();

    for (let i = 0; i < tags.length; i++) {
      if (tags[i].tagName.startsWith('H') && !tags[i].tagName.endsWith('R')) {
        headingTags.push(new TocNode(
          Number.parseInt(tags[i].tagName.substring(1), 10),
          tags[i].id, tags[i].textContent));
      }
    }

    this.buildTree(this.parentNode, headingTags);
    this.numberTOC(this.parentNode, '');
  }

  /**
   * Given a parent node, builds a tree of nodes from a flat array of nodes.
   * @param parent A higher level node in the array of children
   * @param children The child nodes
   */
  private buildTree(parent: TocNode, children: Array<any>): TocNode {
    do {
      const child: TocNode = children.shift();

      if (child && child.level === parent.level + 1) {
        parent.children.push(this.buildTree(child, children));
      } else {
        children.unshift(child);
        return parent;
      }
    } while (children.length > 0);
  }

  private numberTOC(root: TocNode, parentNumber: string): void {
    let num = 1;

    for (const child of root.children) {
      child.levelNum = parentNumber + num + '.';

      if (child.children.length > 0) {
        this.numberTOC(child, child.levelNum);
      }

      num += 1;
    }
  }

  /**
   * Replaces the default AsciiDoc icons with Mat Icons to fit in
   * with the website's theme.
   * @param guide The document body.
   */
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

  /**
   * Given the icon to be replaced, replaces a single icon within the document's body.
   * @param icon The icon to be replaced.
   * @param iconName The name of the icon that will replace the default icons.
   * @param color The color of the replacement icon.
   */
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
