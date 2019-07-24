import { Component, OnInit } from '@angular/core';
import { ImgExternalUrlService } from '../../services/img-external-url.service';
import { BannerComponent } from '@components/banner/banner.component';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';
import { TranslationEnFrService } from '../../services/translation-en-fr.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public imgExternalUrlService: ImgExternalUrlService,
              private router: Router,
              private translationEnFrService: TranslationEnFrService) { }


  tasksSummaryData = [
    {
      id: 1,
      task: '7 years of experience working as Front End developer.',
      task_fr: '7 années d\'expérience en tant que développeur frontal.',
      src: '/ProfessionalExperience',
    },
    {
      id: 2,
      task: '6 years experience working with Angular Js and Angular 2/4/5/6/7/8.',
      task_fr: '6 ans d\'expérience avec Angular Js et Angular 2/4/5/6/7/8.',
      src: '/ProfessionalExperience/ListOfProject',
    },
    {
      id: 3,
      task: 'Familiar with the following languages: Node.JS, JQuery, JavaScript, HTML/HTML5, CSS/CSS3, SQL, Python, C, C++, C#, Java,',
      task_fr: 'Maîtrise des languages suivantes:  Node.JS, JQuery, JavaScript, HTML / HTML5, CSS / CSS3, SQL, Python, C, C ++, C #, Java',
      src: '/SoftwareSkills',
    },
    {
      id: 4,
      task: 'Use of Git as code versioning toll.',
      task_fr: 'Utilisation de Git comme version de code.',
      src: '',
    },
    {
      id: 5,
      task: 'Master in Information Processing Science.',
      task_fr: 'Master en sciences de traitement de l\'information.',
      src: '',
    },
    {
      id: 6,
      task: 'Fluency in English and French.',
      task_fr: 'Maîtrise de l\'anglais et du français.',
      src: '',
    },
  ];
  // go to the route
  viewDetails(i: any) {
    this.router.navigateByUrl(this.tasksSummaryData[i].src);
  }

  ngOnInit() {
  }

}
