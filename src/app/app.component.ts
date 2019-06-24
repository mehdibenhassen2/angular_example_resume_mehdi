import { Component, HostListener, Inject, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './services/window-scroll.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'resumeMehdiWebFE';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  offset = 0;
@HostListener('window:scroll', [])
onWindowScroll() {
  this.offset = this.window.pageYOffset ;
  //if (offset > 250){console.log(offset); } else {console.log('mehdi'); }
  return this.offset;
}
ngOnInit() {
  
}
}
