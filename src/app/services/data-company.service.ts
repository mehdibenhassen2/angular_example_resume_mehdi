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
        domaine_fr: 'Programmation:',
        domaineLogo: '../../../assets/software/code.png',
        Softwares: [
          {
            softwareName: 'Angular Js/2/4/5/6/78',
            logo: '../../../assets/software/angular-logo.jpg',
            years: '6 ',
          },
          {
            softwareName: 'HTML/HTML5',
            logo: '../../../assets/software/html.png',
            years: '7 ',
          },
          {
            softwareName: 'CSS/CSS3/SCSS',
            logo: '../../../assets/software/css.png',
            years: '7 ',
          },
          {
            softwareName: 'JavaScript',
            logo: '../../../assets/software/javascript.jpeg',
            years: '7 ',
          },
          {
            softwareName: 'Java',
            logo: '../../../assets/software/java-logo.png',
            years: '1 ',
          }, {
            softwareName: 'Node.JS',
            logo: '../../../assets/software/node.jpg',
            years: '1 ',
          },
          {
            softwareName: 'JQuery',
            logo: '../../../assets/software/jquery-logo.jpg',
            years: '2 ',
          },
          {
            softwareName: 'Qt',
            logo: '../../../assets/software/Qt.jpeg',
            years: '2 ',
          },
          {
            softwareName: 'Python',
            logo: '../../../assets/software/python-logo.png',
            years: '2 ',
          },
          {
            softwareName: 'PHP',
            logo: '../../../assets/software/php-logo.jpg',
            years: '1 ',
          },
          {
            softwareName: 'Visual Basic',
            logo: '../../../assets/software/visual-studio-logo.jpg',
            years: '1 ',
          },
          {
            softwareName: 'C',
            logo: '../../../assets/software/c.png',
            years: '1 ',
          },
          {
            softwareName: 'C++',
            logo: '../../../assets/software/C++.png',
            years: '3 ',
          },
          {
            softwareName: 'C#',
            logo: '../../../assets/software/Csharp.png',
            years: '1 ',
          }
        ]

      },
      {
        domaine: 'Design and Multimedia:',
        domaine_fr: 'Design et multimédia:',
        domaineLogo: '../../../assets/software/design.jpg',
        Softwares: [
          {
            softwareName: 'Adobe Photoshop',
            logo: '../../../assets/software/Adobe_Photoshop.png',
            years: '2 ',
          },
          {
            softwareName: 'Adobe Illustrator',
            logo: '../../../assets/software/Adobe_Illustrator.png',
            years: '4 ',
          },
          {
            softwareName: 'Adobe Flash',
            logo: '../../../assets/software/Adobe_Flash_Player.png',
            years: '4 ',
          },
          {
            softwareName: 'Adobe Golive',
            logo: '../../../assets/software/adobe_golive_logo.jpg',
            years: '1 ',
          },
          {
            softwareName: 'Adobe Director',
            logo: '../../../assets/software/Adobe_Director.jpg',
            years: '2 ',
          },
          {
            softwareName: 'Dreamweaver',
            logo: '../../../assets/software/Adobe_Dreamweaver_logo.png',
            years: '1 ',
          }

        ]
      },
      {
        domaine: 'DataBase:',
        domaine_fr: 'Base de Données',
        domaineLogo: '../../../assets/software/db.png',
        Softwares: [
          {
            softwareName: 'Oracle',
            logo: '../../../assets/software/oracle.gif',
            years: '1 ',
          },
          {
            softwareName: 'Access',
            logo: '../../../assets/software/f-access.jpg',
            years: '3 ',
          },
          {
            softwareName: 'WinDEV',
            logo: '../../../assets/software/windev.jpg',
            years: '1',
          }

        ]
      }];






    this.projectList = [

      // role 1
      {
        role: 'Front End developer',
        role_fr: 'Développeur Frontal',
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
        tasks_fr: [
          'Travailler avec l\'équipe Front-End pour créer une application Web Angular 7',
          'Concevoir, construire et tester des composants Web basés sur des maquettes d\'interface utilisateur haute fidélité',
          'Fournir une application frontale complète en coopération avec l\'équipe de développement back - end',
          'Assurer des performances élevées sur les applications mobiles et Web',
          'Utiliser les bonnes pratiques de conception, réutiliser le code et écrire du code JavaScript, TypeScript, HTML et CSS efficace et documenté',
          'Communiquer les exigences de l\'API RESTful à l\'équipe de back-end',
          'Communication avec des services Web externes',
          'Ecrire testé, idiomatique et documenté Angular, JavaScript, HTML et CSS',
          'Coordonner les flux de travail entre le côté commercial, le graphiste, l\'analyste de données et l\'équipe de back - end',
          'Communiquez avec les services Web externes et les développeurs front-outs externalisés avec l\'équipe de développement de circuits intégrés et les architectes pour concevoir et créer la nouvelle plate-forme logicielle.',
          'Collaborer avec d\'autres développeurs de logiciels, sponsors commerciaux et architectes de logiciels pour planifier, concevoir, développer, tester et gérer la plate-forme et les applications mobiles basées sur le Web.',
        ],

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
      // role 2
      {
        role: 'Front End developer',
        role_fr: 'Développeur Frontal',
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
        tasks_fr: [
          'Développer / gérer / maintenir le site Web de 12 pays (Mexique, Colombie, Chili,…) pour fournir les données (en utilisant HTML5, JavaScript, Angular JS, jQuery, Node.JS et CSS3)',
          'Jouer un rôle actif dans la structuration des applications d\'une page pour les rendre faciles à gérer (Angular JS 2)',
          'Maintenance d\'applications avec des technologies telles que JQuery / HTML5 / Javascript / Angular / Bootstrap',
          'Développer l’application mobile «TabLauncher» pour les filiales de douze pays (avec JavaScript, HTML5, CSS3, NodeJS, Angular 2/4…) ',
          'Développer et mettre à jour des fonctionnalités destinées aux utilisateurs',
          'Développer, concevoir et concevoir le site Web de l\'équipe de distribution réseau en utilisant JavaScript, HTML5, CSS3, Angular JS.',
          'Traitement d\'images et de vidéos.',
          'Collaborer avec les développeurs back-end, l\'équipe marketing, l\'équipe de petites entreprises',
          'Collaborer avec l\'équipe d\'assurance qualité pour définir les scénarios de test et résoudre les problèmes',
          'Travailler avec UI / UX designer',
          'Configuration et administration du serveur cloud',
          'Utiliser Agile produit (Jira, Confluence, Bitbucket) pour organiser les tâches de l\'équipe',
          'Construire des relations solides avec d\'autres départements pour acquérir des ensembles de données pertinents dans l\'ensemble de l\'organisation',
        ],
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
      // role 3
      {
        role: 'Technology Lead',
        role_fr: 'Responsable technique',
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
        tasks_fr: [
          'Développer et mettre en œuvre des solutions web',
          'Construire un site web en utilisant HTML5, CSS3, Javascript et AngularJS, Node.JS.',
          'Développer une application mobile en utilisant JQuery et AngularJS.',
          'Développer et mettre à jour des fonctionnalités destinées aux utilisateurs;',
          'Développement de scripts et création de nouvelles boîtes à outils pour le géotraitement et l\'analyse spatiale.',
          'Développer une application API.',
          'Organiser une formation sur les produits dans un environnement de classe et / ou en ligne',
          'Développer des solutions personnalisées pour les clients.',
          'Aider à l\'élaboration de programmes d\'instruction liés aux produits',
          'Aider à l\'élaboration de la documentation de support technique',
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
        role_fr: 'Développeur',
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
        tasks_fr: [
          'Développer, concevoir et concevoir un nouveau logiciel pour la segmentation des données de scanner laser et de données de photogrammétrie à proximité (en utilisant C / C ++, Java et python)',
          'Collecte de données de scanner laser 3D et de données de photogrammétrie à courte portée',
          'Enregistrement des données du scanner laser et des données de photogrammétrie à courte portée',
          'Supprimer les données bruit',
          'Rédigez le manuel d\'utilisation de ce logiciel.',
        ],
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

      // role 5
      {
        role: 'Front-End Developer',
        role_fr: 'Développeur Frontal',
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
        tasks_fr: [
          'Construire des sites web en utilisant HTML5, CSS3, Javascript, Node.JS',
          'Conception et mise en œuvre de solutions web et mobiles.',
          'Conception de base de données pour de nombreuses entreprises',
          'Développer une application Web mobile utilisant GeoCortex et Html5, JQuery et AngularJS.',
          'Configuration et maintenance des applications Oracle et du serveur de base de données',
          'Rédiger les rapports de suivi et les rapports techniques.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'GIS app',
            projectName: 'Mapping of the marble stones of Tataouine (south Tunisia).',
            projectName_fr: 'Cartographie des pierres de marbre de Tataouine (sud tunisien).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '2',
            type: 'GIS app',
            projectName: '  Environmental impact assessment of the sand quarry SISE Henchir MOUROUJ EL - EL MOUADEN Imada, Sejnane delegation, Governorate of Bizerte (Tunisia).',
            projectName_fr: 'Etude d\'impact sur l\'environnement de la carrière de sable SISE Henchir MOUROUJ EL-EL MOUADEN Imada, délégation de Sejnane, gouvernorat de Bizerte (Tunisie).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },

          {
            projectIndex: '3',
            type: 'GIS app',
            projectName: 'Technical and social studies of three small lakes and their integrated management of watersheds in the governorate of Sidi Bouzid. Thmed (delegation of Sidi Bouzid Est), El Magroun (Delegation Jelma) and Faidh Lahchim (Delegation Cebbala).',
            projectName_fr: 'Etudes techniques et sociales sur trois petits lacs et leur gestion intégrée des bassins versants dans le gouvernorat de Sidi Bouzid. Thmed (délégation de Sidi Bouzid Est), El Magroun (Délégation Jelma) et Faidh Lahchim (Délégation Cebbala).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },

          {
            projectIndex: '4',
            type: 'GIS app',
            projectName: '  Implementation of Urban GIS in Kerkena (Tunisia)',
            projectName_fr: 'Mise en place de SIG urbain à Kerkena (Tunisie)',
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
        role_fr: 'Développeur Web',
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
        tasks_fr: [
          'Construire des sites web en utilisant HTML5, CSS3, Javascript, Node.JS',
          'Conception et mise en œuvre de solutions web et mobiles.',
          'Conception de base de données pour de nombreuses entreprises',
          'Développer une application Web mobile utilisant GeoCortex et Html5, JQuery et AngularJS.',
          'Configuration et maintenance des applications Oracle et du serveur de base de données',
          'Rédiger les rapports de suivi et les rapports techniques.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'GIS app',
            projectName: ' Estimation of the Gypsum deposits of three licenses in sabkha NDGHAMCHA north of the city of Nouakchott (Mauritania).',
            projectName_fr: 'Estimation des gisements de gypse de trois permis à sabkha NDGHAMCHA au nord de la ville de Nouakchott (Mauritanie).',
            projectdetails: {
              data: '',
              visible: false,
            },
          }, {
            projectIndex: '2',
            type: 'GIS app',
            projectName: 'Estimation of the cement deposit in J. Ressas (Tunisia).',
            projectName_fr: 'Estimation du gisement de ciment à J. Ressas (Tunisie).',
            projectdetails: {
              data: '',
              visible: false,
            },
          }, {
            projectIndex: '3',
            type: 'GIS app',
            projectName: 'Study the Environmental impact assessment of the current licence to operate the gold mine of Kiniero (Guinea).',
            projectName_fr: 'Etudier l\'évaluation de l\'impact sur l\'environnement de la licence actuelle d\'exploitation de la mine d\'or de Kiniero (Guinée).',
            projectdetails: {
              data: GeoenvironementProject1Component,
              visible: false,
            },
          },
          {
            projectIndex: '4',
            type: 'GIS app',
            projectName: ' Study of environmental impact assessment of the extension of the gold mine in Western Kinièro Balan (Guinea).',
            projectName_fr: 'Étude d’évaluation de l’impact sur l’environnement de l’extension de la mine d’or de Kinièro Balan occidental (Guinée).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '5',
            type: 'GIS app',
            projectName: 'Study of environmental impact assessment of quarrying limestone and marl for cement project projected in Zouarine, Delegation of Sers, Kef Governorate (Tunisia).',
            projectName_fr: 'Etude d’impact sur l’environnement d’un projet d’extraction du ciment et de la pierre calcaire à Zouarine, Délégation de Sers, Gouvernorat du Kef (Tunisie).', 
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '6',
            type: 'GIS app',
            projectName: '  Study of environmental impact of marble quarry, projected in BENI Hazem, Delegation of Makthar Seliana Governorate (Tunisia).',
            projectName_fr: 'Étude d\'impact sur l\'environnement de la carrière de marbre, projeté à BENI Hazem, délégation du gouvernorat de Maktar Siliana (Tunisie).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '7',
            type: 'GIS app',
            projectName: 'Environmental impact assessment of the clay pit in Sidi Jedidi, Governorate of Nabeul (Tunisia).',
            projectName_fr: 'Etude d\'impact sur l\'environnement de la carrière d\'argile à Sidi Jedidi, Gouvernorat de Nabeul (Tunisie).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '8',
            type: 'GIS app',
            projectName: 'Environmental impact assessment the quarrying of aggregate on the slick in J.OUST (Tunisia).',
            projectName_fr: 'Etude d\'impact sur l\'environnement de l\'extraction d\'agrégats sur la nappe à J.OUST (Tunisie).',
            projectdetails: {
              data: '',
              visible: false,
            },
          },
          {
            projectIndex: '9',
            type: 'GIS app',
            projectName: 'Environmental impact assessment of the quarry aggregate SISE AIN EL Babouch, Zriba delegation, Governorate zaghouan (Tunisia).',
            projectName_fr: 'Etude d\'impact sur l\'environnement des granulats de carrière SISE AIN EL Babouch, délégation de Zriba, gouvernorat de zaghouan (Tunisie)',
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
        role_fr: 'Développeur Web',
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
        tasks_fr: [
          'Construire des sites web en utilisant HTML5, CSS3, Javascript, Node.JS',
          'Conception et mise en œuvre de solutions web et mobiles.',
          'Conception de base de données pour de nombreuses entreprises',
          'Développer une application Web mobile utilisant GeoCortex et Html5, JQuery et AngularJS.',
          'Configuration et maintenance des applications Oracle et du serveur de base de données',
          'Rédiger les rapports de suivi et les rapports techniques.',
        ],
        projectCompany: [
          {
            projectIndex: '1',
            type: 'GIS app',
            projectName: 'Analysis of the evolution of the coastline north of Sousse (Tunisia).',
            projectName_fr: 'Analyse de l\'évolution du littoral au nord de Sousse (Tunisie).',
            projectdetails: {
              data: '',
              visible: false,
            },
          }, {
            projectIndex: '2',
            type: 'GIS app',
            projectName: 'Analysis of the coastal erosion of Kerkennah (Tunisia).',
            projectName_fr: 'Analyse de l\'érosion côtière de Kerkennah (Tunisie).',
            projectdetails: {
              data: '',
              visible: false,
            },

          }, {
            projectIndex: '3',
            type: 'GIS app',
            projectName: 'Environmental impact assessment of the development of Gammarth marine (Tunisia).',
            projectName_fr: 'Etude d\'impact sur l\'environnement du développement de Gammarth marine (Tunisie).',
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