import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleasesComponent } from './releases/releases.component';
import { HyraxComponent } from './hyrax/hyrax.component';
import { SoftwareComponent, SupportComponent, AboutUsComponent } from './markdown-module/content.components';
import { FaqSingleSectionComponent } from './faq/faq-single-section/faq-single-section.component';
import { FaqComponent } from './faq/faq.component';
import { MarkdownModuleComponent } from './markdown-module/markdown-module.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { DocumentationComponent } from './hyrax/documentation/documentation.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'test', component: MarkdownModuleComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'support/faq', component: FaqComponent },
  { path: 'support/faq/:article', component: FaqSingleSectionComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'software/hyrax', component: HyraxComponent },
  { path: 'software/hyrax/guide', component: DocumentationComponent },
  { path: 'software/hyrax/releases/:version', component: ReleasesComponent },
  // { path: 'devtools/boilerplate', component: BoilerplateMakerComponent },
  // { path: 'devtools/boilerplate/:fixVersion', component: BoilerplateEditorComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
