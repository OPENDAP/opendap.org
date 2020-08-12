import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HyraxComponent } from './hyrax/hyrax.component';
import { MarkdownModuleComponent } from './markdown-module/markdown-module.component';
import { ReleasesComponent } from './releases/releases.component';
import { DownloadWidgetComponent } from './hyrax/download-widget/download-widget.component';
import { AboutUsComponent, SoftwareComponent, SupportComponent } from './markdown-module/content.components';
import { FaqComponent } from './faq/faq.component';
import { FaqSingleSectionComponent } from './faq/faq-single-section/faq-single-section.component';
import { FaqSearchComponent } from './faq/faq-search/faq-search.component';
import { FaqSectionComponent } from './faq/faq-section/faq-section.component';

import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './navigation/footer/footer.component';
import { NavComponent } from './navigation/nav/nav.component';
import { NavigationDockComponent } from './navigation/navigation-dock/navigation-dock.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';

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
    FaqSectionComponent,
    FooterComponent,
    NavComponent,
    NavigationDockComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
