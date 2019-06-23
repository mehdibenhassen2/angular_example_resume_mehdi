import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './components/summary/summary.component';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';
import { BlogComponent } from './components/blog/blog.component';
import { EducationComponent } from './components/education/education.component';
import { SoftwareSkillsComponent } from './components/software-skills/software-skills.component';

// for education
import { DiplomaComponent } from './components/education/diploma/diploma.component';
import { PublicationComponent } from './components/education/publication/publication.component';
import { ConferenceComponent } from './components/education/conference/conference.component';

// for professional experience:
import { TasksComponent } from './components/professional-experience/tasks/tasks.component';
import { ListOfProjectsComponent } from '@listOfProjects/list-of-projects.component';
import { TrainingComponent } from '@components/professional-experience/training/training.component';
import { UniversityOfCalgaryProject1Component } from '@listOfProjects/university-of-calgary-project1/university-of-calgary-project1.component';
import { InsuredConnectProject1Component } from '@listOfProjects/insured-connect-project1/insured-connect-project1.component';
import { ScotiabankProject1Component } from '@listOfProjects/scotiabank-project1/scotiabank-project1.component';
import { ScotiabankProject2Component } from '@listOfProjects/scotiabank-project2/scotiabank-project2.component';
import { ContactComponent } from '@components/contact/contact.component';
import { GeomaticaProject1Component } from '@listOfProjects/geomatica-project1/geomatica-project1.component';
import { GeoenvironementProject1Component } from '@listOfProjects/geoenvironement-project1/geoenvironement-project1.component';
import {CodeComponent} from '@components/code/code.component'
const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'Summary', component: SummaryComponent },
  { path: 'home', component: SummaryComponent },
  {
    path: 'ProfessionalExperience', component: ProfessionalExperienceComponent,

    children: [
      { path: '', component: TasksComponent },
      { path: 'Tasks', component: TasksComponent },
      { path: 'ListOfProject', component: ListOfProjectsComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'UniversityOfCalgaryProject1', component: UniversityOfCalgaryProject1Component },
      { path: 'InsuredConnectProject1', component: InsuredConnectProject1Component },
      { path: 'ScotiabankProject1', component: ScotiabankProject1Component },
      { path: 'ScotiabankProject2', component: ScotiabankProject2Component },
      { path: 'GeomaticaProject1', component: GeomaticaProject1Component },
      { path: 'GeoenvironementProject1', component: GeoenvironementProject1Component },
    ]
  },
  { path: 'SoftwareSkills', component: SoftwareSkillsComponent },
  {
    path: 'Education', component: EducationComponent,
    children: [
      // education
      { path: '', component: DiplomaComponent },
      { path: 'Diploma', component: DiplomaComponent },
      { path: 'Publication', component: PublicationComponent },
      { path: 'Conference', component: ConferenceComponent },
    ]
  },
  { path: 'Blog', component: BlogComponent },
  { path: 'Contact', component: ContactComponent },

  { path: 'Code', component: CodeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
