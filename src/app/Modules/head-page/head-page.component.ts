import { Component, OnInit } from '@angular/core';
import {ImgExternalUrlService} from '../../services/img-external-url.service';

@Component({
  selector: 'app-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.scss']
})
export class HeadPageComponent implements OnInit {

  constructor(public imgExternalUrlService: ImgExternalUrlService
              )  { }


  ngOnInit() {
  }

}
