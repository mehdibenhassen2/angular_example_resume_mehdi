import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const header = document.getElementById('navbarNavAltMarkup');
    const btns = header.getElementsByClassName('navbar-nav');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }

}
