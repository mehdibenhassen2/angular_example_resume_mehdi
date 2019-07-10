import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslationEnFrService} from '../../services/translation-en-fr.service';


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
      title_fr: 'Le meilleur des meilleurs 2017',
      discription: 'Selected as one of Scotiabank s Top individual performance Award Winners',
      discription_fr: 'Sélectionné comme l’un des meilleurs  performance individuelle de la Banque Scotia',
      position: '15%',
    },
    {
      srcPath: '../../../assets/bannier/ban2.png',
      title: 'Work as team',
      title_fr: 'Travailler en équipe',
      discription: 'Collaboration with Back-End, design, business, DataBase, QA teams',
      discription_fr: 'Collaboration avec les équipes du BackEnd, du design, des affaires, de la base de données et du contrôle qualité',
      position: '15%',
    },
    {
      srcPath: '../../../assets/bannier/ban3.png',
      title: 'Best of the Best team for 2016',
      title_fr:'Meilleur de la meilleure équipe pour 2016',
      discription: 'Many projects in same time, respect of timeline and follow of business requirements ',
      discription_fr: 'Plusieurs projets en même temps, respect des délais et respect des exigences de l\'entreprise',
      position: '15%',
    },
    {
      srcPath: '../../../assets/bannier/ban4.png',
      title: 'IOS app TabLauncher',
      title_fr:'Application IOS TabLauncher',
      discription: 'Develop mobile application “TabLauncher” for branches in twelve countries in south America',
      discription_fr: 'Développer l\'application mobile «TabLauncher» pour les succursales dans douze pays d\'Amérique du Sud',
      position: '5%',
    },
    {
      srcPath: '../../../assets/bannier/ban5.png',
      title: 'Scotiabank: Launch of "win" project',
      title_fr:'Banque Scotia: lancement du projet "win"',
      discription: 'Big project with big prospective for ScotiaBank International ',
      discription_fr: 'Gros projet à fort potentiel pour ScotiaBank International',
      position: '15%',
    }

  ]

  constructor(ngbCarouselConfig: NgbCarouselConfig,
              public translationEnFrService: TranslationEnFrService) {
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
