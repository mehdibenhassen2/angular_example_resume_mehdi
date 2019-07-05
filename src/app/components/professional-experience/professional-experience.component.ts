import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
          label: 'Tasks',
          link: './Tasks',
          index: 0
      }, {
          label: 'List Of Project',
          link: './ListOfProject',
          index: 1
      }
      /*,  {
      label: 'Training',
      link: './training',
      index: 2
  }*/
  ];
   }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
  }










