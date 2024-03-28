import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:max-line-length
@Injectable({
  providedIn: 'root'
})
export class DataCompanyService {
  public flagArray = [];
  public projectList = [];
  public softwareList = [];
  public selectedIndex: number;

  constructor(private httpClient: HttpClient) {
    this.selectedIndex = -1;
    this.softwareList = [
      {
        domaine: 'Framework: ',
        domaine_fr: 'Framework: ',
        domaineLogo: 'assets/software/code.png',
        Softwares: [
          {
            softwareName: 'Angular Js/ 2 -> 17',
            logo: 'assets/software/angular-logo.jpg',
            years: '8',
          },
          {
            softwareName: 'ReactJS',
            logo: 'assets/software/React_Logo.png',
            years: '1',
          },
          {
            softwareName: 'JQuery',
            logo: 'assets/software/jquery-logo.jpg',
            years: '1 ',
          },
        ]
      },
      {
        domaine: 'Programming: ',
        domaine_fr: 'Programmation: ',
        domaineLogo: 'assets/software/code.png',
        Softwares: [
          {
            softwareName: 'HTML5',
            logo: 'assets/software/html.png',
            years: '12 ',
          },
          {
            softwareName: 'CSS3',
            logo: 'assets/software/css.png',
            years: '12 ',
          },
          {
            softwareName: 'JavaScript',
            logo: 'assets/software/javascript.jpeg',
            years: '8',
          },
          {
            softwareName: 'Java',
            logo: 'assets/software/java-logo.png',
            years: '1 ',
          }, {
            softwareName: 'Node.JS',
            logo: 'assets/software/node.jpg',
            years: '1 ',
          },
          {
            softwareName: 'Python',
            logo: 'assets/software/python-logo.png',
            years: '2 ',
          },
          {
            softwareName: 'PHP',
            logo: 'assets/software/php-logo.jpg',
            years: '1 ',
          },
          {
            softwareName: 'Visual Basic',
            logo: 'assets/software/visual-studio-logo.jpg',
            years: '1 ',
          },
          {
            softwareName: 'C',
            logo: 'assets/software/c.png',
            years: '1 ',
          },
          {
            softwareName: 'C++',
            logo: 'assets/software/C++.png',
            years: '3 ',
          },
          {
            softwareName: 'C#',
            logo: 'assets/software/Csharp.png',
            years: '1 ',
          }
        ]
      },
      {
        domaine: 'Design: ',
        domaine_fr: 'Conception: ',
        domaineLogo: 'assets/software/design.jpg',
        Softwares: [
          {
            softwareName: 'Figma',
            logo: 'assets/software/Figma.png',
            years: '2 ',
          },
          {
            softwareName: 'Zeplin',
            logo: 'assets/software/Zeplin.png',
            years: '4 ',
          }
        ]
      },
      {
        domaine: 'Project Management: ',
        domaine_fr: 'Gestion des Projets: ',
        domaineLogo: 'assets/software/design.jpg',
        Softwares: [
          {
            softwareName: 'Jira',
            logo: 'assets/software/jira.png',
            years: '8 ',
          },
          {
            softwareName: 'ClickUp',
            logo: 'assets/software/clickup.png',
            years: '1 ',
          }
        ]
      },
      {
        domaine: 'Content Management System (CMS): ',
        domaine_fr: 'Système de Gestion de Contenu (CMS): ',
        domaineLogo: 'assets/software/design.jpg',
        Softwares: [
          {
            softwareName: 'Contentful',
            logo: 'assets/software/Contentful.png',
            years: '4',
          }, {
            softwareName: 'WordPress',
            logo: 'assets/software/WordPress.png',
            years: '1 ',
          }
        ]
      },
      {
        domaine: 'Multimedia: ',
        domaine_fr: 'Multimédia: ',
        domaineLogo: 'assets/software/design.jpg',
        Softwares: [
          {
            softwareName: 'Adobe Photoshop',
            logo: 'assets/software/Adobe_Photoshop.png',
            years: '2 ',
          },
          {
            softwareName: 'Adobe Illustrator',
            logo: 'assets/software/Adobe_Illustrator.png',
            years: '4 ',
          },
          {
            softwareName: 'Adobe Flash',
            logo: 'assets/software/Adobe_Flash_Player.png',
            years: '4 ',
          },
          {
            softwareName: 'Adobe Golive',
            logo: 'assets/software/adobe_golive_logo.jpg',
            years: '1 ',
          },
          {
            softwareName: 'Adobe Director',
            logo: 'assets/software/Adobe_Director.jpg',
            years: '2 ',
          },
          {
            softwareName: 'Dreamweaver',
            logo: 'assets/software/Adobe_Dreamweaver_logo.png',
            years: '1 ',
          }
        ]
      },
      {
        domaine: 'DataBase: ',
        domaine_fr: 'Base de Données',
        domaineLogo: 'assets/software/db.png',
        Softwares: [
          {
            softwareName: 'MySQL',
            logo: 'assets/software/MySQL.png',
            years: '1 ',
          },
          {
            softwareName: 'Oracle',
            logo: 'assets/software/oracle.gif',
            years: '1 ',
          },
          {
            softwareName: 'Access',
            logo: 'assets/software/f-access.jpg',
            years: '3 ',
          },
          {
            softwareName: 'WinDEV',
            logo: 'assets/software/windev.jpg',
            years: '1',
          }
        ]
      }];

      

  }
  public getData() {
    this.httpClient.get('../').subscribe(response => {
    }
    );
  }


}
