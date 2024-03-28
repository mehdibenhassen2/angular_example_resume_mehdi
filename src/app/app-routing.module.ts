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
import { ContactComponent } from './Modules/contact/contact.component';

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
