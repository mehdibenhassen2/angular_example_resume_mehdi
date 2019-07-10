import { Component, OnInit } from '@angular/core';
import {ImgExternalUrlService} from '../../services/img-external-url.service';
import {TranslateService} from '@ngx-translate/core';
import { TranslationEnFrService} from '../../services/translation-en-fr.service';
@Component({
  selector: 'app-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.scss']
})
export class HeadPageComponent implements OnInit {

  constructor(public imgExternalUrlService: ImgExternalUrlService,
              public translationEnFrService: TranslationEnFrService
              )  { }


  ngOnInit() {
  }

}
