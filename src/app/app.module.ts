import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { DemoMaterialModule } from './material-module';
import { DynamicContentModule } from './dynamic-content/dynamic-content.module';
import { FaqModule } from './faq/faq.module';
import { HyraxModule } from './hyrax/hyrax.module';
import { NavModule } from './nav/nav.module';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DemoMaterialModule,
    DynamicContentModule,
    FaqModule,
    HttpClientModule,
    HyraxModule,
    MatMenuModule,
    NavModule,
    ReactiveFormsModule,
    RouterModule,
    ServicesModule,
    AppRoutingModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
