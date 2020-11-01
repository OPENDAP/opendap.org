import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `<app-markdown-module pageID="about-us"></app-markdown-module>`,
  styles: [`td { img { max-width: 85px; } }`],
  
})
export class AboutUsComponent { }

@Component({
  selector: 'app-software',
  template: `<app-markdown-module pageID="software"></app-markdown-module>`,
  
})
export class SoftwareComponent { }

@Component({
  selector: 'app-support',
  template: `<app-markdown-module pageID="support"></app-markdown-module>`,
  
})
export class SupportComponent { }
