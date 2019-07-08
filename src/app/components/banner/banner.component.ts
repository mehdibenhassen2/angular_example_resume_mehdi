import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class BannerComponent implements OnInit {
  dataEvent: string;
  public currentImageId = 0; // init of first image id in the slide
  images = [
    {
      srcPath: '../../../assets/bannier/ban1.png',
      title: 'Best of the Best 2017',
      discription: 'Selected as one of Scotiabank s Top individual performance Award Winners',
      position: '15%',
    },
    {
      srcPath: '../../../assets/bannier/ban2.png',
      title: 'Work as team',
      discription: 'Collaboration with Back-End, design, business, DataBase, QA teams',
      position: '15%',
    },
    {
      srcPath: '../../../assets/bannier/ban3.png',
      title: 'Best of the Best team for 2016',
      discription: 'Many projects in same time, respect of timeline and follow of business requerements ',
      position: '15%',
    },
    {
      srcPath: '../../../assets/bannier/ban4.png',
      title: 'IOS app TabLauncher',
      discription: 'Develop mobile application “TabLauncher” for branches in twelve countries in south America',
      position: '5%',
    },
    {
      srcPath: '../../../assets/bannier/ban5.png',
      title: 'Scotiabank: Launch of "win" project',
      discription: 'Big project with big prospective for ScotiaBank International ',
      position: '15%',
    }

  ]

  constructor(ngbCarouselConfig: NgbCarouselConfig) {
    ngbCarouselConfig.interval = 5000;
    ngbCarouselConfig.wrap = true;
    ngbCarouselConfig.keyboard = true;
    ngbCarouselConfig.pauseOnHover = false;
  }
  onSlide(event) {
    this.dataEvent = JSON.stringify(event);
     // console.log(event);
    const imageIndex = parseInt(event.current.replace('slideId_', ''), 10);
     // console.log('image index', imageIndex); 
    this.currentImageId = imageIndex;
    // the scroll bar should fellow the active title in the left side
    const elmnt = document.getElementById('title' + (imageIndex));
    // console.log(elmnt);
    elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });

  }


  ngOnInit() {
  }

}
