import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServicesModule } from '../services/services.module';

import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NavComponent } from './components/nav/nav.component';
import { NestedMenuComponent } from './components/nav/nested-menu/nested-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FooterComponent,
    LandingComponent,
    NavComponent,
    NestedMenuComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    ServicesModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    LandingComponent,
    NavComponent,
    NotFoundComponent,
  ]
})
export class NavModule { }
