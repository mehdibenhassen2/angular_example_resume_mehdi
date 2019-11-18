import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BlogPieceComponent } from '../blog-piece/blog-piece.component';

@Component({
  selector: 'app-modal-blog',
  templateUrl: './modal-blog.component.html',
  styleUrls: ['./modal-blog.component.scss']
})
export class ModalBlogComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef < BlogPieceComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {
  }
  markAsRead() {
    this.thisDialogRef.close('Confirm');
  }
  onClose() {
    this.thisDialogRef.close('Cancel');
  }
}
