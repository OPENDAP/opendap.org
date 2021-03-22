import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { TocLevelComponent } from './components/toc-level/toc-level.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    DocumentationComponent,
    TocLevelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    AppRoutingModule
  ]
})
export class DocsModule { }
