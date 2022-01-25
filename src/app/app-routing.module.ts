import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicRoutesService } from './services/dynamic-routes.service';

import { DocumentationComponent } from './hyrax/components/documentation/documentation.component';
import { DynamicContentComponent } from './dynamic-content/components/dynamic-content/dynamic-content.component';
import { FaqComponent } from './faq/components/faq/faq.component';
import { FaqSectionComponent } from './faq/components/faq-section/faq-section.component';
import { HyraxComponent } from './hyrax/components/hyrax/hyrax.component';
import { LandingComponent } from './nav/components/landing/landing.component';
import { NotFoundComponent } from './nav/components/not-found/not-found.component';
import { ReleasesComponent } from './hyrax/components/releases/releases.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: ':query', component: DynamicContentComponent },
  { path: 'support/faq', component: FaqComponent },
  { path: 'support/faq/search/:query', component: FaqComponent },
  { path: 'support/faq/:article', component: FaqSectionComponent },
  { path: 'software/hyrax', component: HyraxComponent },
  { path: 'software/hyrax/guide', component: DocumentationComponent },
  { path: 'software/hyrax/releases/:version', component: ReleasesComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

export function initRoutes(configService: DynamicRoutesService) {
  return (): Promise<void> => {
      return new Promise((resolve, reject) => {
          configService.initRoutes().subscribe(menu => {
              configService.menu = menu;
          }, error => {
              reject(error);
          }, () => {
              resolve();
          });
      })
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 55]
  })],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initRoutes,
      multi: true,
      deps: [ DynamicRoutesService ]
    }

  ]
})
export class AppRoutingModule { }
