import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataReaderService } from './data-reader.service';
import { DynamicRoutesService } from './dynamic-routes.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DataReaderService,
    DynamicRoutesService
  ]
})
export class ServicesModule { }
