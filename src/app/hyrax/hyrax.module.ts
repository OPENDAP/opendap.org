import { CommonModule } from '@angular/common';
import { FaqModule } from '../faq/faq.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServicesModule } from '../services/services.module';

import { DocumentationComponent } from './components/documentation/documentation.component';
import { DownloadWidgetComponent } from './components/download-widget/download-widget.component';
import { HyraxComponent } from './components/hyrax/hyrax.component';
import { ReleasesComponent } from './components/releases/releases.component';
import { TocLevelComponent } from './components/toc-level/toc-level.component';

@NgModule({
  declarations: [
    DocumentationComponent,
    DownloadWidgetComponent,
    HyraxComponent,
    ReleasesComponent,
    TocLevelComponent,
  ],
  imports: [
    CommonModule,
    FaqModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule,
    ServicesModule,
  ],
  exports: [
    DocumentationComponent,
    HyraxComponent,
    ReleasesComponent,
  ]
})
export class HyraxModule { }
