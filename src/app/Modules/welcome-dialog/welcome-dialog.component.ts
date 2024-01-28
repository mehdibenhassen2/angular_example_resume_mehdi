import { Component, OnInit, Inject, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'translateY(-200px)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'translateX(200px)' }))
      ])
    ])
  ]
})

export class WelcomeDialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible = false;
  @Input() showDialog: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private dialogRef: MatDialogRef<WelcomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
  }
  ngOnInit() {
  }
  close() {
    this.visible = false;
    this.showDialog = !this.showDialog;
    this.visibleChange.emit(this.showDialog);
  }
}
