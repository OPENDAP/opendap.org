import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HyraxComponent } from './hyrax/hyrax.component';
import { MarkdownModuleComponent } from './markdown-module/markdown-module.component';
import { ReleasesComponent } from './releases/releases.component';
import { DownloadWidgetComponent } from './hyrax/download-widget/download-widget.component';
import { AboutUsComponent } from './content-driven/about-us/about-us.component';
import { SoftwareComponent } from './content-driven/software/software.component';
import { SupportComponent } from './content-driven/support/support.component';
import { FaqComponent } from './faq/faq.component';
import { FaqSingleSectionComponent } from './faq/faq-single-section/faq-single-section.component';
import { FaqSearchComponent } from './faq/faq-search/faq-search.component';
import { FaqSectionComponent } from './faq/faq-section/faq-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HyraxComponent,
    MarkdownModuleComponent,
    ReleasesComponent,
    DownloadWidgetComponent,
    AboutUsComponent,
    SoftwareComponent,
    SupportComponent,
    FaqComponent,
    FaqSingleSectionComponent,
    FaqSearchComponent,
    FaqSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
