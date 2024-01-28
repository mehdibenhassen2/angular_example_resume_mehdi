import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalBlogComponent } from '../modal-blog/modal-blog.component';

@Component({
  selector: 'app-blog-piece',
  templateUrl: './blog-piece.component.html',
  styleUrls: ['./blog-piece.component.scss']
})
export class BlogPieceComponent implements OnInit {
  dialogResult: any[];
  @Input() title: any;
  @Input() place: any;
  @Input() date: any;
  @Input() text: any;
  @Input() image: any;
  @Input() see: any;
   imagesByBloc: any[];

  constructor(public dialog: MatDialog) {

  }
  openDialog() {

    const dialogRef = this.dialog.open(ModalBlogComponent, {
      width: '600px',
      height: '700px',
      data: {
        dg_title: this.title,
        dg_place: this.place,
        dg_date: this.date,
        dg_text: this.text,
        dg_see: this.see,
        dg_image: this.imagesByBloc,
      },

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
  ngOnInit() {
    return this.imagesByBloc = this.image.split(',');
  }

}
