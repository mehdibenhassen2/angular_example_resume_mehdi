import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationEnFrService {
  language = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }
   useLanguage(language: string) {
    this.translate.use(language);
  }
  switch_lang() {
    if (this.language === 'en') {
    this.language = 'fr';
    console.log(this.language);
  } else {
    this.language = 'en';
    console.log(this.language);
    }
  }
}
