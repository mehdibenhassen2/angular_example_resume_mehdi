import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // to create email form
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';
import { SoftwareSkillsComponent } from './components/software-skills/software-skills.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DiplomaComponent } from './components/education/diploma/diploma.component';
import { PublicationComponent } from './components/education/publication/publication.component';
import { ConferenceComponent } from './components/education/conference/conference.component';
import { CanselMapComponent } from './components/professional-experience/cansel-map/cansel-map.component';
import { TasksComponent } from './components/professional-experience/tasks/tasks.component';
import { ListOfProjectsComponent } from './components/professional-experience/list-of-projects/list-of-projects.component';
import { TrainingComponent } from './components/professional-experience/training/training.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
// tslint:disable-next-line:max-line-length
import { UniversityOfCalgaryProject1Component } from './components/professional-experience/list-of-projects/university-of-calgary-project1/university-of-calgary-project1.component';
import { InsuredConnectProject1Component } from './components/professional-experience/list-of-projects/insured-connect-project1/insured-connect-project1.component';
import { ScotiabankProject1Component } from './components/professional-experience/list-of-projects/scotiabank-project1/scotiabank-project1.component';
import { ScotiabankProject2Component } from './components/professional-experience/list-of-projects/scotiabank-project2/scotiabank-project2.component';
import { GeomaticaProject1Component } from './components/professional-experience/list-of-projects/geomatica-project1/geomatica-project1.component';
import { GeoenvironementProject1Component } from './components/professional-experience/list-of-projects/geoenvironement-project1/geoenvironement-project1.component';

import { WINDOW_PROVIDERS } from './services/window-scroll.service';
import { MatCardModule } from '@angular/material/card';
import { CodeComponent } from './components/code/code.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeadPageComponent } from './components/head-page/head-page.component';
import { BannerComponent } from './components/banner/banner.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireList, AngularFireObject } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ProfessionalExperienceComponent,
    SoftwareSkillsComponent,
    EducationComponent,
    ContactComponent,
    BlogComponent,
    DiplomaComponent,
    PublicationComponent,
    ConferenceComponent,
    CanselMapComponent,
    TasksComponent,
    ListOfProjectsComponent,
    TrainingComponent,
    UniversityOfCalgaryProject1Component,
    InsuredConnectProject1Component,
    ScotiabankProject1Component,
    ScotiabankProject2Component,
    GeomaticaProject1Component,
    GeoenvironementProject1Component,
    CodeComponent,
    NavBarComponent,
    HeadPageComponent,
    BannerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule, // to add email form
    MatTabsModule, //to add tab from material agular
    BrowserAnimationsModule, //for animation tab
    AngularFontAwesomeModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'resumeMehdiFE'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    ReactiveFormsModule,
    AngularFireDatabaseModule

  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
