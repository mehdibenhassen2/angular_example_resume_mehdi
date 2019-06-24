import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class BannerComponent implements OnInit {
  images = [
    {
      srcPath: '../../../assets/bannier/ban1.png',
      title: 'Best of the Best 2017',
      discription: 'Selected as one of Scotiabank s Top individual performance Award Winners',
      position: '15%',
    },
    {
      srcPath: '../../../assets/bannier/ban2.png',
      title:'',
      discription:'',
      position:'15%',
    },
    {
      srcPath: '../../../assets/bannier/ban3.png',
      title:'Best of the Best team for 2016',
      discription:'',
      position:'15%',
    },
    {
      srcPath: '../../../assets/bannier/ban4.png',
      title:'IOS app TabLauncher',
      discription: 'Develop mobile application “TabLauncher” for branches in twelve countries in south America',
      position: '5%',
    },
    {
      srcPath: '../../../assets/bannier/ban5.png',
      title:'Scotiabank: Launch of "win" project',
      discription:'',
      position:'15%',
    }

  ]

  constructor(ngbCarouselConfig: NgbCarouselConfig) { 
    ngbCarouselConfig.interval = 5000;
    ngbCarouselConfig.wrap = true;
    ngbCarouselConfig.keyboard = false;
    ngbCarouselConfig.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
