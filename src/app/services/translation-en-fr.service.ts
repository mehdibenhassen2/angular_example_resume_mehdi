import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationEnFrService {
  public language = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }
   useLanguage() {
    this.translate.use(this.language);
  }
  switch_lang() {
    if (this.language === 'en') {
    this.language = 'fr';
    this.useLanguage();

  } else {
    this.language = 'en';
    this.useLanguage();
    }
    return this.language;
    

  }
}
