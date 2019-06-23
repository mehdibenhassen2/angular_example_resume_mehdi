import { Component, OnInit } from '@angular/core';
import {ImgExternalUrlService} from '../../../../services/img-external-url.service';

@Component({
  selector: 'app-scotiabank-project1',
  templateUrl: './scotiabank-project1.component.html',
  styleUrls: ['./scotiabank-project1.component.scss']
})
export class ScotiabankProject1Component implements OnInit {
  // pathimage = '../../../../../assets/project/scotiabank_project1';
  constructor(public imgExternalUrlService: ImgExternalUrlService ){
  }
  ngOnInit() {
  }

}
