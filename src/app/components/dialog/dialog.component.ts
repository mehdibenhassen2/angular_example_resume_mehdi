import { Component, OnInit, Inject, Input, Output, OnChanges, EventEmitter  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'translateY(-200px)'  }),
        animate(500)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'translateX(200px)'  }))
      ])
    ])
  ]




})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
  }


  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
