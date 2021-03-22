import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadWidgetComponent } from './components/download-widget/download-widget.component';
import { HyraxComponent } from './components/hyrax/hyrax.component';
import { ReleasesComponent } from './components/releases/releases.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'app/material-module';



@NgModule({
  declarations: [
    DownloadWidgetComponent,
    HyraxComponent,
    ReleasesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ]
})
export class HyraxModule { }
