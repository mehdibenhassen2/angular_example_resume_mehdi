import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './interfaces/dialog-data';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogConfig } from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resumeMehdiWebFE';
  constructor(private matDialog: MatDialog,
              private translate: TranslateService) { 
                translate.setDefaultLang('banner/fr');
            }


  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.matDialog.open(DialogComponent, dialogConfig);
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
  ngOnInit() {
    this.openDialog();
  }
}
