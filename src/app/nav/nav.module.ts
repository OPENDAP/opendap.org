import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { MaterialModule } from 'app/material-module';



@NgModule({
  declarations: [
    FooterComponent,
    LandingComponent,
    NavComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class NavModule { }
