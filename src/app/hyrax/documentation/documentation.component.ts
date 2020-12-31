import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/shared/services/data-reader.service';

@Component({
  selector: 'app-documentation',
  template: `
    <div id="body" class="body"></div>
  `,
  styleUrls: ['documentation.component.scss']
})
export class DocumentationComponent {

  constructor(public dataReaderService: DataReaderService) {
    this.dataReaderService.getHyraxGuide().subscribe((response: any) => {
      const fullGuide: HTMLDivElement = document.createElement('div');
      fullGuide.innerHTML = response.data;
      console.log(fullGuide);

      const guide = this.extractContent(fullGuide);
      const toc = this.extractTOC(guide);

      this.replaceIcons(guide);

      document.getElementById('body').appendChild(toc);
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

  private extractTOC(content: HTMLDivElement): HTMLDivElement {
    const tags = content.getElementsByTagName('*');

    const headings = document.createElement('div');
    headings.classList.add('table_of_contents');

    for (let i = 0; i < tags.length; i++) {
      if (tags[i].tagName.startsWith('H') && !tags[i].tagName.endsWith('R')) {
        headings.appendChild(tags[i] as HTMLElement);
      }
    }

    return headings;
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
