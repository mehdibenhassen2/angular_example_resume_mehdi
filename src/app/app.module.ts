import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // to create email form
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';
import { SoftwareSkillsComponent } from './components/software-skills/software-skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiplomaComponent } from './components/education/diploma/diploma.component';
import { PublicationComponent } from './components/education/publication/publication.component';
import { ConferenceComponent } from './components/education/conference/conference.component';
import { CanselMapComponent } from './components/professional-experience/cansel-map/cansel-map.component';
import { TasksComponent } from './components/professional-experience/tasks/tasks.component';
import { ListOfProjectsComponent } from './components/professional-experience/list-of-projects/list-of-projects.component';
import { TrainingComponent } from './components/professional-experience/training/training.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
import { UniversityOfCalgaryProject1Component } from './components/professional-experience/list-of-projects/university-of-calgary-project1/university-of-calgary-project1.component';
import { InsuredConnectProject1Component } from './components/professional-experience/list-of-projects/insured-connect-project1/insured-connect-project1.component';
import { ScotiabankProject1Component } from './components/professional-experience/list-of-projects/scotiabank-project1/scotiabank-project1.component';
import { ScotiabankProject2Component } from './components/professional-experience/list-of-projects/scotiabank-project2/scotiabank-project2.component';
import { GeomaticaProject1Component } from './components/professional-experience/list-of-projects/geomatica-project1/geomatica-project1.component';
import { GeoenvironementProject1Component } from './components/professional-experience/list-of-projects/geoenvironement-project1/geoenvironement-project1.component';

import { WINDOW_PROVIDERS } from './services/window-scroll.service';
import { CodeComponent } from './components/code/code.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeadPageComponent } from './components/head-page/head-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormGroup } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {   } from '@angular/material';

// import interface
import { DialogData } from './interfaces/dialog-data';
import { DialogComponent} from '@components/dialog/dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder } from '@angular/forms';
// translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ExperienceChartComponent } from './components/experience-chart/experience-chart.component';
import { ChartTasksComponent} from './components/chart_tasks/chart_tasks.component';

// import module angular material
import { AngularMaterialModule } from './angular-material.module';
// import module for blog
import { BlogModule } from './components/blog/blog.module';
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ProfessionalExperienceComponent,
    SoftwareSkillsComponent,
    EducationComponent,
    ContactComponent,
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
    BannerComponent,
    DialogComponent,
    ExperienceChartComponent,
    ChartTasksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule, // to add email form
    BrowserAnimationsModule, // for animation tab
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'resumeMehdiFE'),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    BlogModule,
    AngularMaterialModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  exports: [],
  providers: [WINDOW_PROVIDERS,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }],

  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}