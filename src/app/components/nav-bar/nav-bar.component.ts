import { WINDOW } from '../../services/window-scroll.service';
import { Component, HostListener, Inject, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationEnFrService } from '../../services/translation-en-fr.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public translationEnFrService: TranslationEnFrService,
              public router: Router,
              @Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window
  ) { }
  offset = 0;
  display = true;
  showDialog = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.offset = this.window.pageYOffset;
    return this.offset;
  }

  showDialogFunc(){
    this.showDialog = !this.showDialog;
    console.log(this.showDialog);
  }
  ngOnInit() {


  }

}
