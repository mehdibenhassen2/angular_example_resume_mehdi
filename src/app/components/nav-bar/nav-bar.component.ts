import { WINDOW } from '../../services/window-scroll.service';
import { Component, HostListener, Inject, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public router: Router,
              @Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window
              ) { }
  offset = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.offset = this.window.pageYOffset;
    //if (offset > 250){console.log(offset); } else {console.log('mehdi'); }
    return this.offset;
  }

  ngOnInit() {
    /*
    // for the horizontal menu
    const header = document.getElementById('navbarNavAltMarkup');
    const btns = header.getElementsByClassName('navbar-nav');
    // for the vertical menu
    const headerVertical = document.getElementById('navbarVertical');
    const btnsVertical = headerVertical.getElementsByClassName('vertical_btn');

    // when the user click on any button of horizontal bar

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        // for horizontal bar
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += ' active';
        // for vertical bar
        for (let j = 0; j < btnsVertical.length; j++) {
          btnsVertical[j].className = btnsVertical[j].className.replace(' activeVertical', '');

          if (j === i) {
            btnsVertical[j].className += ' activeVertical';
          }
        }
      });
    }
    // when the user click on any button of vertical bar

    for (let i = 0; i < btnsVertical.length; i++) {
      btnsVertical[i].addEventListener('click', function () {
        // for horizontal bar
        const current = document.getElementsByClassName('activeVertical');
        current[0].className = current[0].className.replace('activeVertical', '');
        this.className += ' activeVertical';
        // for vertical bar
        for (let j = 0; j < btns.length; j++) {
          btns[j].className = btns[j].className.replace(' active', '');

          if (j === i) {
            btns[j].className += ' active';
          }
        }
      });
      
    }





*/




  }

}
