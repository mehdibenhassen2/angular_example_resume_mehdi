import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import { WelcomeDialogComponent } from 'src/app/Modules/welcome-dialog/welcome-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resumeMehdiWebFE';
  constructor(private matDialog: MatDialog,
              private translate: TranslateService) { 
                translate.setDefaultLang('en');
            }


  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.matDialog.open(WelcomeDialogComponent, dialogConfig);
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
  ngOnInit() {
  }
}
