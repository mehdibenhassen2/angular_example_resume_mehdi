import { Component, OnInit } from '@angular/core';
import {ImgExternalUrlService} from '../../services/img-external-url.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public imgExternalUrlService: ImgExternalUrlService ){}


  ngOnInit() {
  }

}
