import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdocComponent } from './components/adoc/adoc.component';
import { AdocTemplateComponent } from './components/adoc-template/adoc-template.component';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ServicesModule } from '../services/services.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AdocComponent,
    AdocTemplateComponent,
    DynamicContentComponent,
    SafeHtmlPipe,
    SubNavComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    ServicesModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    DynamicContentComponent
  ]
})
export class DynamicContentModule { }
