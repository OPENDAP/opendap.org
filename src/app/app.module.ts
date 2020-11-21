import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HyraxComponent } from './hyrax/hyrax.component';
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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownDivComponent } from './shared/components/markdown-div/markdown-div.component';
import { DocumentationComponent } from './hyrax/documentation/documentation.component';
import { AdocComponent } from './shared/components/adoc/adoc.component';
import { AdocTemplateComponent } from './shared/components/adoc-template/adoc-template.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HyraxComponent,
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
    NotFoundComponent,
    MarkdownDivComponent,
    DocumentationComponent,
    AdocComponent,
    AdocTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
