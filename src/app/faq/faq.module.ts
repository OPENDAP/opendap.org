import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServicesModule } from '../services/services.module';

import { FaqComponent } from './components/faq/faq.component';
import { FaqSearchComponent } from './components/faq-search/faq-search.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { MarkdownDivComponent } from './components/markdown-div/markdown-div.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FaqComponent,
    FaqSearchComponent,
    FaqSectionComponent,
    MarkdownDivComponent
  ],
  imports: [
    ClipboardModule,
    CommonModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
    ServicesModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FaqComponent,
    FaqSectionComponent,
    MarkdownDivComponent
  ]
})
export class FaqModule { }
