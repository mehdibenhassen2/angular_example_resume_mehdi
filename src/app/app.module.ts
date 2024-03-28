import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // to create email form
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SummaryComponent } from "./Modules/summary/summary.component";
import { ProfessionalExperienceComponent } from "./Modules/professional-experience/professional-experience.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EducationComponent } from "./Modules/education/education.component";
import { ContactComponent } from "./Modules/contact/contact.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DiplomaComponent } from "./Modules/education/diploma/diploma.component";
import { PublicationComponent } from "./Modules/education/publication/publication.component";
import { ConferenceComponent } from "./Modules/education/conference/conference.component";
import { TasksComponent } from "./Modules/professional-experience/tasks/tasks.component";
import { ListOfProjectsComponent } from "./Modules/professional-experience/list-of-projects/list-of-projects.component";
import { TrainingComponent } from "./Modules/professional-experience/training/training.component";
import { AngularFontAwesomeModule } from "angular-font-awesome/dist";
import { HttpClient, HttpClientModule } from "@angular/common/http";
// tslint:disable-next-line:max-line-length

import { WINDOW_PROVIDERS } from "./services/window-scroll.service";
import { NavBarComponent } from "./Modules/nav-bar/nav-bar.component";
import { HeadPageComponent } from "./Modules/head-page/head-page.component";
import { BannerComponent } from "./Modules/banner/banner.component";

// Firebase

import { environment } from "../environments/environment";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { ReactiveFormsModule } from "@angular/forms";
import {
  AngularFireDatabaseModule,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/compat/database";
import { MatMenuModule } from "@angular/material/menu";

// import interface
import { DialogData } from "./interfaces/dialog-data";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FormBuilder } from "@angular/forms";
// translation
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ExperienceChartComponent } from "./Modules/experience-chart/experience-chart.component";
import { ChartTasksComponent } from "./Modules/chart_tasks/chart_tasks.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";

// import module angular material
import { AngularMaterialModule } from "./angular-material.module";
// import module for blog
import { BlogModule } from "./Modules/blog/blog.module";
import { MatIconModule } from "@angular/material/icon";
import { WelcomeDialogComponent } from "./Modules/welcome-dialog/welcome-dialog.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTreeModule } from "@angular/material/tree";
import { MatGridListModule } from "@angular/material/grid-list";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ProfessionalExperienceComponent,
    EducationComponent,
    ContactComponent,
    DiplomaComponent,
    PublicationComponent,
    ConferenceComponent,
    TasksComponent,
    ListOfProjectsComponent,
    TrainingComponent,
    NavBarComponent,
    HeadPageComponent,
    BannerComponent,
    ExperienceChartComponent,
    ChartTasksComponent,
    WelcomeDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    FormsModule, // to add email form
    BrowserAnimationsModule, // for animation tab
    MatIconModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      "resumeMehdiFE"
    ),
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    BlogModule,
    MatMenuModule,
    MatTabsModule,
    MatTreeModule,
    MatGridListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}, {}),
  ],
  exports: [],
  providers: [
    WINDOW_PROVIDERS,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // entryComponents: [WelcomeDialogComponent]
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
