import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from '@docs/components/documentation/documentation.component';
import { FaqSectionComponent } from '@faq/components/faq-section/faq-section.component';
import { FaqComponent } from '@faq/components/faq/faq.component';
import { AdocComponent } from '@shared/components/adoc/adoc.component';
import { SoftwareComponent, SupportComponent, AboutUsComponent } from './content.components';
import { HyraxComponent } from './hyrax/components/hyrax/hyrax.component';
import { ReleasesComponent } from './hyrax/components/releases/releases.component';
import { LandingComponent } from './nav/components/landing/landing.component';
import { NotFoundComponent } from './nav/components/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'test', component: AdocComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'support/faq', component: FaqComponent },
  { path: 'support/faq/search/:query', component: FaqComponent },
  { path: 'support/faq/:article', component: FaqSectionComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'software/hyrax', component: HyraxComponent },
  { path: 'software/hyrax/guide', component: DocumentationComponent },
  { path: 'software/hyrax/releases/:version', component: ReleasesComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 55]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
