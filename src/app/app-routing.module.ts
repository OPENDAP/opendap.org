import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleasesComponent } from './releases/releases.component';
import { HyraxComponent } from './hyrax/hyrax.component';
import { SoftwareComponent, SupportComponent, AboutUsComponent } from './content.components';
import { FaqComponent } from './faq/faq.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { DocumentationComponent } from './hyrax/documentation/documentation.component';
import { AdocComponent } from './shared/components/adoc/adoc.component';
import { FaqSectionComponent } from './faq/faq-section/faq-section.component';


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
