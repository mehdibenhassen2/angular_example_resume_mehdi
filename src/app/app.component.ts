import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from './interfaces/dialog-data';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resumeMehdiWebFE';
  name: string;
  user: string;
  constructor(private matDialog: MatDialog,
              private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData

  ) { }

   
  openDialog(): void {
    this.dialogRef = this.matDialog.open(DialogComponent, {
      width: '50%',
      data: {user: this.user, name: this.name}
    });


  }

  ngOnInit() {
    this.openDialog();
  }
}
