import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { FaqComponent } from './components/faq/faq.component';
import { FaqSearchComponent } from './components/faq-search/faq-search.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from 'app/material-module';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    FaqComponent,
    FaqSearchComponent,
    FaqSectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class FaqModule { }
