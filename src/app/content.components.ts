import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `<app-adoc-template pageID="about-us"></app-adoc-template>`,
})
export class AboutUsComponent { }

@Component({
  selector: 'app-software',
  template: `<app-adoc pageName="software"></app-adoc>`,
})
export class SoftwareComponent { }

@Component({
  selector: 'app-support',
  template: `<app-adoc-template pageID="support"></app-adoc-template>`,
})
export class SupportComponent { }
