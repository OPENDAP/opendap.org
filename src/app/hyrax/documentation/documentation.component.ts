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

      let guide: HTMLDivElement;

      const tags = fullGuide.getElementsByTagName('*');
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].id === 'content') {
          guide = (tags[i] as HTMLDivElement);
        }
      }

      const icons = guide.getElementsByClassName('icon');
      for (let i = 0; i < icons.length; i++) {
        const icon = icons[i].firstElementChild;

        if (icon.classList.contains('icon-note')) { this.replaceIcon(icon, 'sticky_note_2'); }
        else if (icon.classList.contains('icon-tip')) { this.replaceIcon(icon, 'school'); }
        else if (icon.classList.contains('icon-warning')) { this.replaceIcon(icon, 'warning', 'warn'); }
        else if (icon.classList.contains('icon-important')) { this.replaceIcon(icon, 'info', 'tip'); }
        else if (icon.classList.contains('icon-caution')) { this.replaceIcon(icon, 'assignment_late', 'warn'); }
      }

      document.getElementById('body').appendChild(guide);
    }, error => {
      console.log(error);
    });
  }

  private replaceWithMatIcon(icons: HTMLCollectionOf<Element>, iconName: string, color = 'primary'): void {
    for (let i = 0; i < icons.length; i++) {
      this.replaceIcon(icons[i], iconName, color);
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
