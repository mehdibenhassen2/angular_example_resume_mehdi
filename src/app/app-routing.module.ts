import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './Modules/summary/summary.component';
import { ProfessionalExperienceComponent } from './Modules/professional-experience/professional-experience.component';
import { BlogComponent } from './Modules/blog/blog.component';
import { EducationComponent } from './Modules/education/education.component';
import { SoftwareSkillsComponent } from './Modules/software-skills/software-skills.component';

// for education
import { DiplomaComponent } from './Modules/education/diploma/diploma.component';
import { PublicationComponent } from './Modules/education/publication/publication.component';
import { ConferenceComponent } from './Modules/education/conference/conference.component';

// for professional experience:
import { TasksComponent } from './Modules/professional-experience/tasks/tasks.component';
import { ListOfProjectsComponent } from './Modules/professional-experience/list-of-projects/list-of-projects.component';
import { TrainingComponent } from './Modules/professional-experience/training/training.component';
import { UniversityOfCalgaryProject1Component } from './/Modules/professional-experience/list-of-projects/university-of-calgary-project1/university-of-calgary-project1.component';
import { InsuredConnectProject1Component } from './Modules/professional-experience/list-of-projects/insured-connect-project1/insured-connect-project1.component';
import { ScotiabankProject1Component } from './Modules/professional-experience/list-of-projects/scotiabank-project1/scotiabank-project1.component';
import { ScotiabankProject2Component } from './Modules/professional-experience/list-of-projects/scotiabank-project2/scotiabank-project2.component';
import { ContactComponent } from './Modules/contact/contact.component';
import { GeomaticaProject1Component } from './Modules/professional-experience/list-of-projects/geomatica-project1/geomatica-project1.component';
import { GeoenvironementProject1Component } from './Modules/professional-experience/list-of-projects/geoenvironement-project1/geoenvironement-project1.component';
import { CodeComponent } from './Modules/code/code.component'
import { ClickatellProject1Component } from './Modules/professional-experience/list-of-projects/clickatell-project1/clickatell-project1.component';
const routes: Routes = [
  { path: '', redirectTo: 'Summary', pathMatch: 'full' },
  { path: 'Summary', component: SummaryComponent },
  { path: 'home', component: SummaryComponent },
  {
    path: 'ProfessionalExperience', component: ProfessionalExperienceComponent,

    children: [
      { path: '', redirectTo: 'Tasks', pathMatch: 'full' },
      { path: 'Tasks', component: TasksComponent },
      { path: 'ListOfProject', component: ListOfProjectsComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'UniversityOfCalgaryProject1', component: UniversityOfCalgaryProject1Component },
      { path: 'ClickatellProject1Component', component: ClickatellProject1Component },
      { path: 'ScotiabankProject1', component: ScotiabankProject1Component },
      { path: 'ScotiabankProject2', component: ScotiabankProject2Component },
      { path: 'GeomaticaProject1', component: GeomaticaProject1Component },
      { path: 'GeoenvironementProject1', component: GeoenvironementProject1Component },
    ]
  },
  //{ path: 'SoftwareSkills', component: SoftwareSkillsComponent },
  { path: 'SoftwareSkills', loadComponent: () => import('./Modules/software-skills/software-skills.component').then(m => m.SoftwareSkillsComponent) },

  {
    path: 'Education', component: EducationComponent,
    children: [
      // education
      { path: '', redirectTo: 'Diploma', pathMatch: 'full' },
      { path: 'Diploma', component: DiplomaComponent },
      { path: 'Publication', component: PublicationComponent },
      { path: 'Conference', component: ConferenceComponent },
    ]
  },
  {
    path: 'Blog',
    loadChildren: () => import('./Modules/blog/blog.module').then(m => m.BlogModule),
    pathMatch: 'full'
  },
  { path: 'Contact', component: ContactComponent },
  { path: 'Code', loadComponent: () => import('./Modules/code/code.component').then(m => m.CodeComponent) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
