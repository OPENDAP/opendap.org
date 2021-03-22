import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdocComponent } from './components/adoc/adoc.component';
import { AdocTemplateComponent } from './components/adoc-template/adoc-template.component';
import { MarkdownDivComponent } from './components/markdown-div/markdown-div.component';
import { DataReaderService } from './services/data-reader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NavigationDockComponent } from './components/navigation-dock/navigation-dock.component';
import { MaterialModule } from 'app/material-module';



@NgModule({
  declarations: [
    AdocComponent,
    AdocTemplateComponent,
    MarkdownDivComponent,
    NavigationDockComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AdocComponent,
    AdocTemplateComponent,
    MarkdownDivComponent
  ],
  providers: [
    DataReaderService
  ]
})
export class SharedModule { }
