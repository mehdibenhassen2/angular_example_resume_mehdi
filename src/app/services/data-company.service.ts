import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UniversityOfCalgaryProject1Component } from '../components/professional-experience/list-of-projects/university-of-calgary-project1/university-of-calgary-project1.component';
import { InsuredConnectProject1Component } from '../components/professional-experience/list-of-projects/insured-connect-project1/insured-connect-project1.component';
// tslint:disable-next-line:max-line-length
import { ScotiabankProject1Component } from '../components/professional-experience/list-of-projects/scotiabank-project1/scotiabank-project1.component';
import { ScotiabankProject2Component } from '../components/professional-experience/list-of-projects/scotiabank-project2/scotiabank-project2.component';
import { GeomaticaProject1Component } from '../components/professional-experience/list-of-projects/geomatica-project1/geomatica-project1.component';
// tslint:disable-next-line:max-line-length
import { GeoenvironementProject1Component } from '../components/professional-experience/list-of-projects/geoenvironement-project1/geoenvironement-project1.component';
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
        domaine: 'Programming:',
        domaineLogo: '../../../assets/software/code.png',
        Softwares: [
          {
            softwareName: 'Angular Js/2/4/5/6/78',
            logo: '../../../assets/software/angular-logo.jpg',
            sizeLogo: '6 years',
          },
          {
            softwareName: 'HTML/HTML5',
            logo: '../../../assets/software/html.png',
            sizeLogo: '7 years',
          },
          {
            softwareName: 'CSS/CSS3/SCSS',
            logo: '../../../assets/software/css.png',
            sizeLogo: '7 years',
          },
          {
            softwareName: 'JavaScript',
            logo: '../../../assets/software/javascript.jpeg',
            sizeLogo: '7 years',
          },
          {
            softwareName: 'Java',
            logo: '../../../assets/software/java-logo.png',
            sizeLogo: '1 year',
          },          {
            softwareName: 'Node.JS',
            logo: '../../../assets/software/node.jpg',
            sizeLogo: '1 year',
          },
          
          {
            softwareName: 'JQuery',
            logo: '../../../assets/software/jquery-logo.jpg',
            sizeLogo: '2 years',
          },
          {
            softwareName: 'Qt',
            logo: '../../../assets/software/Qt.jpeg',
            sizeLogo: '2 years',
          },
          {
            softwareName: 'Python',
            logo: '../../../assets/software/python-logo.png',
            sizeLogo: '2 years',
          },
          {
            softwareName: 'PHP',
            logo: '../../../assets/software/php-logo.jpg',
            sizeLogo: '1 year',
          },
          {
            softwareName: 'Visual Basic',
            logo: '../../../assets/software/visual-studio-logo.jpg',
            sizeLogo: '1 year',
          },
          {
            softwareName: 'C',
            logo: '../../../assets/software/c.png',
            sizeLogo: '1 year',
          },
          {
            softwareName: 'C++',
            logo: '../../../assets/software/C++.png',
            sizeLogo: '3 years',
          },
          {
            softwareName: 'C#',
            logo: '../../../assets/software/Csharp.png',
            sizeLogo: '1 year',
          }
        ]

      },
      {
        domaine: 'Design and Multimedia:',
        domaineLogo: '../../../assets/software/design.jpg',
        Softwares: [
          {
            softwareName: 'Adobe Photoshop',
            logo: '../../../assets/software/Adobe_Photoshop.png',
            sizeLogo: '2 years',
          },
          {
            softwareName: 'Adobe Illustrator',
            logo: '../../../assets/software/Adobe_Illustrator.png',
            sizeLogo: '4 years',
          },
          {
            softwareName: 'Adobe Flash',
            logo: '../../../assets/software/Adobe_Flash_Player.png',
            sizeLogo: '4 years',
          },
          {
            softwareName: 'Adobe Golive',
            logo: '../../../assets/software/adobe_golive_logo.jpg',
            sizeLogo: '1 year',
          },
          {
            softwareName: 'Adobe Director',
            logo: '../../../assets/software/Adobe_Director.jpg',
            sizeLogo: '2 years',
          },
          {
            softwareName: 'Dreamweaver',
            logo: '../../../assets/software/Adobe_Dreamweaver_logo.png',
            sizeLogo: '1 year',
          }

        ]
      },
      {
        domaine: 'DataBase:',
        domaineLogo: '../../../assets/software/db.png',
        Softwares: [
          {
            softwareName: 'Oracle',
            logo: '../../../assets/software/oracle.gif',
            sizeLogo: '6 months',
          },
          {
            softwareName: 'Access',
            logo: '../../../assets/software/f-access.jpg',
            sizeLogo: '3 years',
          },
          {
            softwareName: 'WinDEV',
            logo: '../../../assets/software/windev.jpg',
            sizeLogo: '1 year',
          }

        ]
      }];






    this.projectList = [

      // role 1
      {
        role: 'Front End developer',
        company: 'Insured Connect ',
        year: '2018-2019',
        logo: '../../../assets/logo/insured connect.png',
        tasks: [

          'Working with the Front-End team to build an Angular 7 web application',
          'Design, build and test web components based on high fidelity UI mockups',
          'Delivering a complete front end application in cooperation with the back-end development team',
          'Ensuring high performance on mobile and web app',
          'Utilize good design practices, code reuse, and write efficient and documented JavaScript, TypeScript, HTML and CSS code',
          'Communicate RESTful API requirements to the back-end team',
          'Communicating with external web services',
          'Write tested, idiomatic, and documented Angular, JavaScript, HTML and CSS',
          'Coordinate the workflows between the business side , graphic designer, data analyst and the back end team',
          'Communicate with external web services and outsourced front-end developers to the IC development team and architects to design and build the new software platform.',
          'Collaborate with other software developers, business sponsors, and software architects to plan, design, develop, test, and maintain the platform and web-based mobile applications.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'Web App',
            projectName: 'Build four web applicaiton (for advisor, distributor, carrier, and policy owner) using AngularJS, html, CSS, JavaScript, Angular',
            projectdetails: {
              data: InsuredConnectProject1Component,
              visible: false,
            },

          },

        ]
      },
      // role 2
      {
        role: 'Front End developer',
        company: 'Scotiabank ',
        year: '2016-2018',
        logo: '../../../assets/logo/scotia.png',
        tasks: [

          'Develop / manage / maintain website for 12 countries (Mexico, Colombia, chile,…) to deliver the data ( using HTML5, JavaScript, Angular JS, jQuery, Node.JS, and CSS3)',
          'Taking an active role in structuring single page applications to make them easy to maintain (Angular JS 2)',
          'Maintain of applications with technologies such as JQuery/HTML5/Javascript/Angular /Bootstrap',
          'Develop mobile application “TabLauncher” for branches in twelve countries (Using JavaScript, HTML5, CSS3, NodeJS, Angular 2/4…)',
          'Develop and update user-facing features',
          'Develop, concept and design of the Website of Network Delivery Team using JavaScript, HTML5, CSS3, Angular JS.',
          'Processing of images and videos.',
          'Collaborate with the back-End developers, Marketing team, small business team',
          'Collaborate with QA team to define test cases and to resolve issues,',
          'Work with UI / UX designer',
          'Configuration and administration of cloud server',
          'Use Agile produces (Jira, Confluence, Bitbucket) to organize tasks in the team ',
          'Build solid relationships with other departments to acquire pertinent datasets across the organization',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'Mobile App',
            projectName: 'Build Mobile application IOS for iPad using AngularJS, html, CSS, JavaScript.',
            projectdetails: {
              data: ScotiabankProject1Component,
              visible: false,
            },

          },
          {
            projectIndex: '2',
            type: 'Web Map',
            projectName: 'Configuration, installation, and development of Atlas Decision Support System.',
            projectdetails: {
              data: ScotiabankProject2Component,
              visible: false,
            },
          }
        ]
      },
      // role 3
      {
        role: 'Technology Lead',
        company: 'Cansel Survey Equipment(Calgary) ',
        year: '2015- 2016',
        logo: '../../../assets/logo/logo-cansel.png',
        tasks: [
          'Develop and implementation of web solutions',
          'Build website using HTML5, CSS3, Javascript and AngularJS, Node.JS.',
          'Develop mobile application using JQuery and AngularJS.',
          'Develop and update user-facing features;',
          'Developing script and create new toolboxes for Geoprocessing and spatial analysis.',
          'Develop API application.',
          'Conduct product training in a classroom environment and/or online',
          'Develop customized solutions to customers.',
          'Assist in the development of product related instructional programs',
          'Assist in the development of technical support documentation',
        ],
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
      // role 4
      {
        role: 'Developer',
        company: 'University of Calgary ',
        year: '2012-2014',
        logo: '../../../assets/logo/University-Of-Calgary-Logo.png',
        tasks: [
          'Develop, concept and design of  an new Software for segmentation of laser scanner data and Close-range photogrammetry data (using C/C++, Java and python)',
          'Collection of 3D laser scanner data and Close-range photogrammetry data',
          'Registration of laser scanner data and Close-range photogrammetry data,',
          'Remove noise data,',
          'Write the user manual for this software.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'Software app',
            projectName: ' Software development for Automatic extraction of Insulator feature from close range photogrammetry and laser scanner data.',
            projectdetails: {
              data: UniversityOfCalgaryProject1Component,
              visible: false,
            },
          },

        ]
      },

      // role 5
      {
        role: 'Front-End Developer',
        company: 'Geomatica company ',
        year: '2010-2012',
        logo: '../../../assets/logo/logo-GEOMATICA.jpg',
        tasks: [
          'Build websites using HTML5, CSS3, Javascript, Node.JS',
          'Design and implementation of web and mobile solutions.',
          'Conception of Database for many companies,',
          'Developing mobile web application using GeoCortex and Html5, JQuery and AngularJS.',
          'Configuration and maintenance of Oracle Applications and Database server ',
          'Write the monitoring reports and technical reports.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'GIS app',
            projectName: '  Mapping of the marble stones of Tataouine (south Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '2',
            type: 'GIS app',
            projectName: '  Environmental impact assessment of the sand quarry SISE Henchir MOUROUJ EL - EL MOUADEN Imada, Sejnane delegation, Governorate of Bizerte (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },

          {
            projectIndex: '3',
            type: 'GIS app',
            projectName: 'Technical and social studies of three small lakes and their integrated management of watersheds in the governorate of Sidi Bouzid. Thmed (delegation of Sidi Bouzid Est), El Magroun (Delegation Jelma) and Faidh Lahchim (Delegation Cebbala).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },

          {
            projectIndex: '4',
            type: 'GIS app',
            projectName: '  Implementation of Urban GIS in Kerkena (Tunisia)',
            projectdetails: {
              data: GeomaticaProject1Component,
              visible: false,
            },
          },

        ]
      },
      // role 6

      {
        role: 'Web Developer',
        company: 'Geo-Environnment company',
        year: '2007-2010',
        logo: '../../../assets/logo/geo-environement.png',
        tasks: [
          'Build websites using HTML5, CSS3, Javascript, Node.JS',
          'Design and implementation of web and mobile solutions.',
          'Conception of Database for many companies,',
          'Developing mobile web application using GeoCortex and Html5, JQuery and AngularJS.',
          'Configuration and maintenance of Oracle Applications and Database server ',
          'Write the monitoring reports and technical reports.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'GIS app',
            projectName: ' 1. Estimation of the Gypsum deposits of three licenses in sabkha NDGHAMCHA north of the city of Nouakchott (Mauritania).',
            projectdetails: {
              data: '',
              visible: false,
            },
          }, {
            projectIndex: '2',
            type: 'GIS app',
            projectName: 'Estimation of the cement deposit in J. Ressas (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          }, {
            projectIndex: '3',
            type: 'GIS app',
            projectName: 'Study the Environmental impact assessment of the current licence to operate the gold mine of Kiniero (Guinea).',
            projectdetails: {
              data: GeoenvironementProject1Component,
              visible: false,
            },
          },
          {
            projectIndex: '4',
            type: 'GIS app',
            projectName: '  4. Study of environmental impact assessment of the extension of the gold mine in Western Kinièro Balan (Guinea).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '5',
            type: 'GIS app',
            projectName: 'Study of environmental impact assessment of quarrying limestone and marl for cement project projected in Zouarine, Delegation of Sers, Kef Governorate (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '6',
            type: 'GIS app',
            projectName: '  6. Study of environmental impact of marble quarry, projected in BENI Hazem, Delegation of Makthar Seliana Governorate (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '7',
            type: 'GIS app',
            projectName: '  7. Environmental impact assessment of the clay pit in Sidi Jedidi, Governorate of Nabeul (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '8',
            type: 'GIS app',
            projectName: 'Environmental impact assessment the quarrying of aggregate on the slick in J.OUST (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '9',
            type: 'GIS app',
            projectName: 'Environmental impact assessment of the quarry aggregate SISE AIN EL Babouch, Zriba delegation, Governorate zaghouan (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },

        ]
      },
      // role 7
      {
        role: 'Web Developer',
        company: 'Geo-Service company ',
        year: '2005-2007',
        logo: '../../../assets/logo/geo-service.png',
        tasks: [
          'Build websites using HTML5, CSS3, Javascript, Node.JS',
          'Design and implementation of web and mobile solutions.',
          'Conception of Database for many companies,',
          'Developing mobile web application using GeoCortex and Html5, JQuery and AngularJS.',
          'Configuration and maintenance of Oracle Applications and Database server ',
          'Write the monitoring reports and technical reports.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'GIS app',
            projectName: 'Analysis of the evolution of the coastline north of Sousse (Tunisia).',
            projectdetails: {
              data: 'data',
              visible: false,
            },
          }, {
            projectIndex: '2',
            type: 'GIS app',
            projectName: 'Analysis of the coastal erosion of Kerkennah (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },

          }, {
            projectIndex: '3',
            type: 'GIS app',
            projectName: 'Environmental impact assessment of the development of Gammarth marine (Tunisia).',
            projectdetails: {
              data: '',
              visible: false,
            },

          },

        ]
      }
    ]


    for (let i = 0; i < this.projectList.length; i++) {
      for (let j = 0; j < this.projectList[i].projectCompany.length; j++) {
        this.flagArray.push(false);
      }
    }
  }
  public getData() {
    this.httpClient.get('../').subscribe(response => {
      console.log('response');
    }


    );
  }
  public iconChange(i: number, j: number) {
    this.projectList[i].projectCompany[j].projectdetails.visible = !this.projectList[i].projectCompany[j].projectdetails.visible;
    //console.log(this.projectList[i].projectCompany[j].projectdetails.visible)


  }

  public showAll() {
    for (let i = 0; i < this.projectList.length; i++) {
      for (let j = 0; j < this.projectList[i].projectCompany.length; j++) {
        this.projectList[i].projectCompany[j].projectdetails.visible = true;
      }
      // this.flagArray[i] = true;
    }
  }

  public hideAll() {
    for (let i = 0; i < this.projectList.length; i++) {
      for (let j = 0; j < this.projectList[i].projectCompany.length; j++) {
        this.projectList[i].projectCompany[j].projectdetails.visible = false;
      }
      // this.flagArray[i] = true;
    }
  }

















}