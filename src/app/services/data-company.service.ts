import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UniversityOfCalgaryProject1Component } from 'src/app/Modules/professional-experience/list-of-projects/university-of-calgary-project1/university-of-calgary-project1.component';
import { InsuredConnectProject1Component } from 'src/app/Modules/professional-experience/list-of-projects/insured-connect-project1/insured-connect-project1.component';
import { ScotiabankProject1Component } from 'src/app/Modules/professional-experience/list-of-projects/scotiabank-project1/scotiabank-project1.component';
import { ScotiabankProject2Component } from 'src/app/Modules/professional-experience/list-of-projects/scotiabank-project2/scotiabank-project2.component';
import { GeomaticaProject1Component } from 'src/app/Modules/professional-experience/list-of-projects/geomatica-project1/geomatica-project1.component';
// tslint:disable-next-line:max-line-length
import { GeoenvironementProject1Component } from 'src/app/Modules/professional-experience/list-of-projects/geoenvironement-project1/geoenvironement-project1.component';
import { ClickatellProject1Component } from 'src/app/Modules/professional-experience/list-of-projects/clickatell-project1/clickatell-project1.component';
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

      
    this.projectList = [
      {
        role: 'Senior Front End developer',
        role_fr: 'Développeur Frontal Sénior',
        company: 'Clickatell',
        year: '2019- 2023',
        logo: 'assets/logo/clickatell-logo-vector.png',
       
        projectCompany: [
          {
            projectIndex: '1',
            type: 'Web App',
            projectName: ' Build the next generation of Clickatell products using Angular, html, CSS, JavaScript',
            projectName_fr: 'Construire une nouvell version des produits  clickatell en utilisant Angular, HTML, CSS, JavaScript',
            projectdetails: {
              data: ClickatellProject1Component,
              visible: false,
            },
          },
        ]
      },
      {
        role: 'Senior Front End developer',
        role_fr: 'Développeur Frontal Sénior',
        company: 'Insured Connect',
        year: '2018-2019',
        logo: 'assets/logo/insured connect.png',
                projectCompany: [
          {
            projectIndex: '1',
            type: 'Web App',
            projectName: 'Build four web applicaitons (for advisor, distributor, carrier, and policy owner) using Angular, html, CSS, JavaScript',
            projectName_fr: 'Construire quatre applications Web (pour conseiller, distributeur, opérateur et propriétaire de police) en utilisant Angular, HTML, CSS, JavaScript',
            projectdetails: {
              data: InsuredConnectProject1Component,
              visible: false,
            },
          },
        ]
      },
      {
        role: 'Front End developer/Manager',
        role_fr: 'Développeur/Manager Frontal',
        company: 'Scotiabank ',
        year: '2016-2018',
        logo: 'assets/logo/scotia.png',
        
        projectCompany: [
          {
            projectIndex: '1',
            type: 'Mobile App',
            projectName: 'Build Mobile application IOS for iPad using AngularJS, html, CSS, JavaScript.',
            projectName_fr: 'Construire application mobile IOS pour iPad en utilisant AngularJS, HTML, CSS, JavaScript.',
            projectdetails: {
              data: ScotiabankProject1Component,
              visible: false,
            },
          },
          {
            projectIndex: '2',
            type: 'Web Map',
            projectName: 'Configuration, installation, and development of Atlas Decision Support System.',
            projectName_fr: 'Configuration, installation et développement du système d\'aide à la décision : Atlas.',
            projectdetails: {
              data: ScotiabankProject2Component,
              visible: false,
            },
          }
        ]
      },
      {
        role: 'Technology Lead',
        role_fr: 'Responsable technique',
        company: 'Cansel Survey Equipment(Calgary) ',
        year: '2015- 2016',
        logo: 'assets/logo/logo-cansel.png',
        projectCompany: [
          {
            projectIndex: '1',
            type: 'Software app',
            projectName: ' ',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
        ]
      },
      {
        role: 'Developer',
        role_fr: 'Développeur',
        company: 'University of Calgary ',
        year: '2012-2014',
        logo: 'assets/logo/University-Of-Calgary-Logo.png',
        projectCompany: [
          {
            projectIndex: '1',
            type: 'Software app',
            projectName: ' Software development for Automatic extraction of Insulator feature from close range photogrammetry and laser scanner data.',
            projectName_fr: 'Développement d\'un logiciel pour l\'extraction automatique des Insulators à partir de données de photogrammétrie et de scanner laser à courte portée.',
            projectdetails: {
              data: UniversityOfCalgaryProject1Component,
              visible: false,
            },
          },
        ]
      },
     
    ];
  }
  public getData() {
    this.httpClient.get('../').subscribe(response => {
    }
    );
  }
  public iconChange(i: number, j: number) {
    this.projectList[i].projectCompany[j].projectdetails.visible = !this.projectList[i].projectCompany[j].projectdetails.visible;
    // console.log(this.projectList[i].projectCompany[j].projectdetails.visible)


  }
  /**
   * show all project details
  * */
  public showAll() {
    for (const oneProject of this.projectList) {
      for (const oneCompany of oneProject.projectCompany) {
        oneCompany.projectdetails.visible = true;
      }
    }
  }
  /**
   * hide all project details
  * */
  public hideAll() {
    for (const oneProject of this.projectList) {
      for (const oneCompany of oneProject.projectCompany) {
        oneCompany.projectdetails.visible = false;
      }
    }
  }
}
