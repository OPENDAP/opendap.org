import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `<app-adoc pageName="about-us"></app-adoc>`,
})
export class AboutUsComponent { }

@Component({
  selector: 'app-software',
  template: `<app-adoc pageName="software"></app-adoc>`,
})
export class SoftwareComponent { }

@Component({
  selector: 'app-support',
  template: `<app-markdown-module pageID="support"></app-markdown-module>`,
})
export class SupportComponent { }
