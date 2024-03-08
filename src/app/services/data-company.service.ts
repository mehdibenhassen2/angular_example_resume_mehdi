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
            logo: 'assets/software/react_logo.png',
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
        tasks: [
          { name: 'Work with an team of engineers and product designers to implement the next generation of Clickatell products' },
          { name: 'Improve performance (use of microfrontend architecture, standalone components, lazy loading, etc.).' },
          { name: 'Be part of and actively contribute to a cross-functional Agile/Scrum team that works together to become a high-performing team in delivering world-class technology solutions' },
          { name: 'Be responsible for creating responsive grid systems along with using clean code that will make web interface function properly on any platform they are being viewed from' },
          { name: 'Use JavaScript, CSS, HTML, Angular (8- 16) to build the web applications: write a new code (new stories) and update the old code.' },
          { name: 'Use Responsive Web Design (RWD) techniques in web development: review mocks, bring them to life on desktop and connected devices' },
          { name: 'Develop interactive components using JavaScript and Angular; integrate with internal tools, frameworks and services as well as external APIs' },
          { name: 'Collaborate with backend developers, editors, and external agencies' },
          { name: 'Fix bugs of two old projects using ReactJS and Typescript.'},
          { name: 'Translate UI designs into well-organized and structured HTML/CSS compatible with modern browsers, and use open source tools & frameworks to improve the structure and maintainability of the front-end code where possible' },
          { name: 'Design user interfaces with a modern and clean aesthetic which focus on delivering intuitive & enjoyable user experiences' },
          { name: 'Create wireframes to illustrate high-level solutions to an application and feature requests' },
        ],
        tasks_fr: [
          { name: ' Travailler avec une équipe d\'ingénieurs et de concepteurs de produits pour mettre en œuvre la nouvelle génération de produits Clickatell' },
          { name: 'Améliorer les performances (utilisation d\'une architecture micro-frontend, de composants autonomes, chargement différé, etc.).' },
          { name: ' Faites partie d\'une équipe multidisciplinaire Agile / Scrum qui contribue activement à la création d\'une équipe hautement performante dans la fourniture de solutions technologiques de classe mondiale.' },
          { name: ' Être responsable de la création de systèmes de grille réactifs et de l\'utilisation d\'un code propre qui permettra à l\'interface Web de fonctionner correctement sur la plate-forme sur laquelle elle est visualisée' },
          { name: ' Utiliser JavaScript, CSS, HTML, Angular (8-16) pour créer des applications Web' },
          { name: 'Utilisez les techniques de conception de site Web réactif (RWD) dans le développement Web: passez en revue les simulacres, donnez-les à la vie sur les ordinateurs de bureau et les périphériques connectés' },
          { name: ' Développer des composants interactifs en utilisant JavaScript et Angular; intégrer avec des outils internes, des cadres et des services ainsi que des API externes' },
          { name: 'Collaborer avec les développeurs, les éditeurs et les agences externes' },
          { name: 'Resoudre des bugs de deux anciens projects en Utilisant ReactJS et Typescript.'},
          { name: 'Traduire les conceptions d\'interface utilisateur en HTML / CSS bien organisés et structurés compatibles avec les navigateurs modernes, et utiliser des outils et des frameworks open source pour améliorer la structure et la maintenabilité du code frontal, dans la mesure du possible' },
          { name: ' Concevez des interfaces utilisateur avec une esthétique moderne et épurée visant à offrir une expérience utilisateur intuitive et agréable' },
          { name: ' Créer des wireframes pour illustrer les solutions de haut niveau d\'une application et les demandes de fonctionnalités' },
        ],
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
        tasks: [
          { name: 'Working with the Front-End team to build an Angular 7 web application' },
          { name: 'Design, build and test web components based on high fidelity UI mockups' },
          { name: 'Delivering a complete front end application in cooperation with the back-end development team' },
          { name: 'Ensuring high performance on mobile and web app' },
          { name: 'Utilize good design practices, code reuse, and write efficient and documented JavaScript, TypeScript, HTML and CSS code' },
          { name: 'Communicate RESTful API requirements to the back-end team' },
          { name: 'Communicating with external web services' },
          { name: 'Write tested, idiomatic, and documented Angular, JavaScript, HTML and CSS' },
          { name: 'Coordinate the workflows between the business side , graphic designer, data analyst and the back end team' },
          { name: 'Communicate with external web services and outsourced front-end developers to the IC development team and architects to design and build the new software platform.' },
          { name: 'Collaborate with other software developers, business sponsors, and software architects to plan, design, develop, test, and maintain the platform and web-based mobile applications.' },
        ],
        tasks_fr: [
          { name: 'Travailler avec l\'équipe Front-End pour créer une application Web Angular 7' },
          { name: 'Concevoir, construire et tester des composants Web basés sur des maquettes d\'interface utilisateur haute fidélité' },
          { name: 'Fournir une application frontale complète en coopération avec l\'équipe de développement back - end' },
          { name: 'Assurer des performances élevées sur les applications mobiles et Web' },
          { name: 'Utiliser les bonnes pratiques de conception, réutiliser le code et écrire du code JavaScript, TypeScript, HTML et CSS efficace et documenté' },
          { name: 'Communiquer les exigences de l\'API RESTful à l\'équipe de back-end' },
          { name: 'Communication avec des services Web externes' },
          { name: 'Ecrire testé, idiomatique et documenté Angular, JavaScript, HTML et CSS' },
          { name: 'Coordonner les flux de travail entre le côté commercial, le graphiste, l\'analyste de données et l\'équipe de back - end' },
          { name: 'Communiquez avec les services Web externes et les développeurs front-outs externalisés avec l\'équipe de développement de circuits intégrés et les architectes pour concevoir et créer la nouvelle plate-forme logicielle.' },
          { name: 'Collaborer avec d\'autres développeurs de logiciels, sponsors commerciaux et architectes de logiciels pour planifier, concevoir, développer, tester et gérer la plate-forme et les applications mobiles basées sur le Web.' },
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
      {
        role: 'Front End developer/Manager',
        role_fr: 'Développeur/Manager Frontal',
        company: 'Scotiabank ',
        year: '2016-2018',
        logo: 'assets/logo/scotia.png',
        tasks: [
          { name: 'Develop / manage / maintain website for 12 countries (Mexico, Colombia, chile,…) to deliver the data ( using HTML5, JavaScript, Angular JS, jQuery, Node.JS, and CSS3)' },
          { name: 'Taking an active role in structuring single page applications to make them easy to maintain (Angular JS 2)' },
          { name: 'Maintain of applications with technologies such as JQuery/HTML5/Javascript/Angular /Bootstrap' },
          { name: 'Develop mobile application “TabLauncher” for branches in twelve countries (Using JavaScript, HTML5, CSS3, NodeJS, Angular 2/4…)' },
          { name: 'Develop and update user-facing features' },
          { name: 'Develop, concept and design of the Website of Network Delivery Team using JavaScript, HTML5, CSS3, Angular JS.' },
          { name: 'Processing of images and videos.' },
          { name: 'Collaborate with the back-End developers, Marketing team, small business team' },
          { name: 'Collaborate with QA team to define test cases and to resolve issues,' },
          { name: 'Work with UI / UX designer' },
          { name: 'Configuration and administration of cloud server' },
          { name: 'Use Agile produces (Jira, Confluence, Bitbucket) to organize tasks in the team ' },
          { name: 'Build solid relationships with other departments to acquire pertinent datasets across the organization' },
        ],
        tasks_fr: [
          { name: 'Développer / gérer / maintenir le site Web de 12 pays (Mexique, Colombie, Chili,…) pour fournir les données (en utilisant HTML5, JavaScript, Angular JS, jQuery, Node.JS et CSS3)' },
          { name: 'Jouer un rôle actif dans la structuration des applications d\'une page pour les rendre faciles à gérer (Angular JS 2)' },
          { name: 'Maintenance d\'applications avec des technologies telles que JQuery / HTML5 / Javascript / Angular / Bootstrap' },
          { name: 'Développer l’application mobile «TabLauncher» pour les filiales de douze pays (avec JavaScript, HTML5, CSS3, NodeJS, Angular 2/4…) ' },
          { name: 'Développer et mettre à jour des fonctionnalités destinées aux utilisateurs' },
          { name: 'Développer, concevoir et concevoir le site Web de l\'équipe de distribution réseau en utilisant JavaScript, HTML5, CSS3, Angular JS.' },
          { name: 'Traitement d\'images et de vidéos.' },
          { name: 'Collaborer avec les développeurs back-end, l\'équipe marketing, l\'équipe de petites entreprises' },
          { name: 'Collaborer avec l\'équipe d\'assurance qualité pour définir les scénarios de test et résoudre les problèmes' },
          { name: 'Travailler avec UI / UX designer' },
          { name: 'Configuration et administration du serveur cloud' },
          { name: 'Utiliser Agile produit (Jira, Confluence, Bitbucket) pour organiser les tâches de l\'équipe' },
          { name: 'Construire des relations solides avec d\'autres départements pour acquérir des ensembles de données pertinents dans l\'ensemble de l\'organisation' },
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
      {
        role: 'Technology Lead',
        role_fr: 'Responsable technique',
        company: 'Cansel Survey Equipment(Calgary) ',
        year: '2015- 2016',
        logo: 'assets/logo/logo-cansel.png',
        tasks: [
          { name: 'Develop and implementation of web solutions' },
          { name: 'Build website using HTML5, CSS3, Javascript and AngularJS, Node.JS.' },
          { name: 'Develop mobile application using JQuery and AngularJS.' },
          { name: 'Develop and update user-facing features;' },
          { name: 'Developing script and create new toolboxes for Geoprocessing and spatial analysis.' },
          { name: 'Develop API application.' },
          { name: 'Conduct product training in a classroom environment and/or online' },
          { name: 'Develop customized solutions to customers.' },
          { name: 'Assist in the development of product related instructional programs' },
          { name: 'Assist in the development of technical support documentation' },
        ],
        tasks_fr: [
          { name: 'Développer et mettre en œuvre des solutions web' },
          { name: 'Construire un site web en utilisant HTML5, CSS3, Javascript et AngularJS, Node.JS.' },
          { name: 'Développer une application mobile en utilisant JQuery et AngularJS.' },
          { name: 'Développer et mettre à jour des fonctionnalités destinées aux utilisateurs;' },
          { name: 'Développement de scripts et création de nouvelles boîtes à outils pour le géotraitement et l\'analyse spatiale.' },
          { name: 'Développer une application API.' },
          { name: 'Organiser une formation sur les produits dans un environnement de classe et / ou en ligne' },
          { name: 'Développer des solutions personnalisées pour les clients.' },
          { name: 'Aider à l\'élaboration de programmes d\'instruction liés aux produits' },
          { name: 'Aider à l\'élaboration de la documentation de support technique' },
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
      {
        role: 'Developer',
        role_fr: 'Développeur',
        company: 'University of Calgary ',
        year: '2012-2014',
        logo: 'assets/logo/University-Of-Calgary-Logo.png',
        tasks: [
          { name: 'Develop, concept and design of  an new Software for segmentation of laser scanner data and Close-range photogrammetry data (using C/C++, Java and python)' },
          { name: 'Collection of 3D laser scanner data and Close-range photogrammetry data' },
          { name: 'Registration of laser scanner data and Close-range photogrammetry data,' },
          { name: 'Remove noise data,' },
          { name: 'Write the user manual for this software.' },
        ],
        tasks_fr: [
          { name: 'Développer, concevoir et concevoir un nouveau logiciel pour la segmentation des données de scanner laser et de données de photogrammétrie à proximité (en utilisant C / C ++, Java et python)' },
          { name: 'Collecte de données de scanner laser 3D et de données de photogrammétrie à courte portée' },
          { name: 'Enregistrement des données du scanner laser et des données de photogrammétrie à courte portée' },
          { name: 'Supprimer les données bruit' },
          { name: 'Rédigez le manuel d\'utilisation de ce logiciel.' },
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
      // {
      //   role: 'Front-End Developer',
      //   role_fr: 'Développeur Frontal',
      //   company: 'Geomatica company ',
      //   year: '2010-2012',
      //   logo: 'assets/logo/logo-GEOMATICA.jpg',
      //   tasks: [
      //     { name: 'Build websites using HTML5, CSS3, Javascript, Node.JS' },
      //     { name: 'Design and implementation of web and mobile solutions.' },
      //     { name: 'Conception of Database for many companies,' },
      //     { name: 'Developing mobile web application using GeoCortex and Html5, JQuery and AngularJS.' },
      //     { name: 'Configuration and maintenance of Oracle Applications and Database server ' },
      //     { name: 'Write the monitoring reports and technical reports.' },
      //   ],
      //   tasks_fr: [
      //     { name: 'Construire des sites web en utilisant HTML5, CSS3, Javascript, Node.JS' },
      //     { name: 'Conception et mise en œuvre de solutions web et mobiles.' },
      //     { name: 'Conception de base de données pour de nombreuses entreprises' },
      //     { name: 'Développer une application Web mobile utilisant GeoCortex et Html5, JQuery et AngularJS.' },
      //     { name: 'Configuration et maintenance des applications Oracle et du serveur de base de données' },
      //     { name: 'Rédiger les rapports de suivi et les rapports techniques.' },
      //   ],
      //   projectCompany: [
      //     {
      //       projectIndex: '1',
      //       type: 'GIS app',
      //       projectName: 'Mapping of the marble stones of Tataouine (south Tunisia).',
      //       projectName_fr: 'Cartographie des pierres de marbre de Tataouine (sud tunisien).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '2',
      //       type: 'GIS app',
      //       projectName: '  Environmental impact assessment of the sand quarry SISE Henchir MOUROUJ EL - EL MOUADEN Imada, Sejnane delegation, Governorate of Bizerte (Tunisia).',
      //       projectName_fr: 'Etude d\'impact sur l\'environnement de la carrière de sable SISE Henchir MOUROUJ EL-EL MOUADEN Imada, délégation de Sejnane, gouvernorat de Bizerte (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '3',
      //       type: 'GIS app',
      //       projectName: 'Technical and social studies of three small lakes and their integrated management of watersheds in the governorate of Sidi Bouzid. Thmed (delegation of Sidi Bouzid Est), El Magroun (Delegation Jelma) and Faidh Lahchim (Delegation Cebbala).',
      //       projectName_fr: 'Etudes techniques et sociales sur trois petits lacs et leur gestion intégrée des bassins versants dans le gouvernorat de Sidi Bouzid. Thmed (délégation de Sidi Bouzid Est), El Magroun (Délégation Jelma) et Faidh Lahchim (Délégation Cebbala).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '4',
      //       type: 'GIS app',
      //       projectName: '  Implementation of Urban GIS in Kerkena (Tunisia)',
      //       projectName_fr: 'Mise en place de SIG urbain à Kerkena (Tunisie)',
      //       projectdetails: {
      //         data: GeomaticaProject1Component,
      //         visible: false,
      //       },
      //     },
      //   ]
      // },
      // {
      //   role: 'Web Developer',
      //   role_fr: 'Développeur Web',
      //   company: 'Geo-Environnment company',
      //   year: '2007-2010',
      //   logo: 'assets/logo/geo-environement.png',
      //   tasks: [
      //     { name: 'Build websites using HTML5, CSS3, Javascript, Node.JS' },
      //     { name: 'Design and implementation of web and mobile solutions.' },
      //     { name: 'Conception of Database for many companies,' },
      //     { name: 'Developing mobile web application using GeoCortex and Html5, JQuery and AngularJS.' },
      //     { name: 'Configuration and maintenance of Oracle Applications and Database server ' },
      //     { name: 'Write the monitoring reports and technical reports.' },
      //   ],
      //   tasks_fr: [
      //     { name: 'Construire des sites web en utilisant HTML5, CSS3, Javascript, Node.JS' },
      //     { name: 'Conception et mise en œuvre de solutions web et mobiles.' },
      //     { name: 'Conception de base de données pour de nombreuses entreprises' },
      //     { name: 'Développer une application Web mobile utilisant GeoCortex et Html5, JQuery et AngularJS.' },
      //     { name: 'Configuration et maintenance des applications Oracle et du serveur de base de données' },
      //     { name: 'Rédiger les rapports de suivi et les rapports techniques.' },
      //   ],
      //   projectCompany: [
      //     {
      //       projectIndex: '1',
      //       type: 'GIS app',
      //       projectName: ' Estimation of the Gypsum deposits of three licenses in sabkha NDGHAMCHA north of the city of Nouakchott (Mauritania).',
      //       projectName_fr: 'Estimation des gisements de gypse de trois permis à sabkha NDGHAMCHA au nord de la ville de Nouakchott (Mauritanie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '2',
      //       type: 'GIS app',
      //       projectName: 'Estimation of the cement deposit in J. Ressas (Tunisia).',
      //       projectName_fr: 'Estimation du gisement de ciment à J. Ressas (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '3',
      //       type: 'GIS app',
      //       projectName: 'Study the Environmental impact assessment of the current licence to operate the gold mine of Kiniero (Guinea).',
      //       projectName_fr: 'Etudier l\'évaluation de l\'impact sur l\'environnement de la licence actuelle d\'exploitation de la mine d\'or de Kiniero (Guinée).',
      //       projectdetails: {
      //         data: GeoenvironementProject1Component,
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '4',
      //       type: 'GIS app',
      //       projectName: ' Study of environmental impact assessment of the extension of the gold mine in Western Kinièro Balan (Guinea).',
      //       projectName_fr: 'Étude d’évaluation de l’impact sur l’environnement de l’extension de la mine d’or de Kinièro Balan occidental (Guinée).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '5',
      //       type: 'GIS app',
      //       projectName: 'Study of environmental impact assessment of quarrying limestone and marl for cement project projected in Zouarine, Delegation of Sers, Kef Governorate (Tunisia).',
      //       projectName_fr: 'Etude d’impact sur l’environnement d’un projet d’extraction du ciment et de la pierre calcaire à Zouarine, Délégation de Sers, Gouvernorat du Kef (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '6',
      //       type: 'GIS app',
      //       projectName: '  Study of environmental impact of marble quarry, projected in BENI Hazem, Delegation of Makthar Seliana Governorate (Tunisia).',
      //       projectName_fr: 'Étude d\'impact sur l\'environnement de la carrière de marbre, projeté à BENI Hazem, délégation du gouvernorat de Maktar Siliana (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '7',
      //       type: 'GIS app',
      //       projectName: 'Environmental impact assessment of the clay pit in Sidi Jedidi, Governorate of Nabeul (Tunisia).',
      //       projectName_fr: 'Etude d\'impact sur l\'environnement de la carrière d\'argile à Sidi Jedidi, Gouvernorat de Nabeul (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '8',
      //       type: 'GIS app',
      //       projectName: 'Environmental impact assessment the quarrying of aggregate on the slick in J.OUST (Tunisia).',
      //       projectName_fr: 'Etude d\'impact sur l\'environnement de l\'extraction d\'agrégats sur la nappe à J.OUST (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '9',
      //       type: 'GIS app',
      //       projectName: 'Environmental impact assessment of the quarry aggregate SISE AIN EL Babouch, Zriba delegation, Governorate zaghouan (Tunisia).',
      //       projectName_fr: 'Etude d\'impact sur l\'environnement des granulats de carrière SISE AIN EL Babouch, délégation de Zriba, gouvernorat de zaghouan (Tunisie)',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //   ]
      // },
      // {
      //   role: 'Web Developer',
      //   role_fr: 'Développeur Web',
      //   company: 'Geo-Service company ',
      //   year: '2005-2007',
      //   logo: 'assets/logo/geo-service.png',
      //   tasks: [
      //     { name: 'Build websites using HTML5, CSS3, Javascript, Node.JS' },
      //     { name: 'Design and implementation of web and mobile solutions.' },
      //     { name: 'Conception of Database for many companies,' },
      //     { name: 'Developing mobile web application using GeoCortex and Html5, JQuery and AngularJS.' },
      //     { name: 'Configuration and maintenance of Oracle Applications and Database server ' },
      //     { name: 'Write the monitoring reports and technical reports.' },
      //   ],
      //   tasks_fr: [
      //     { name: 'Construire des sites web en utilisant HTML5, CSS3, Javascript, Node.JS' },
      //     { name: 'Conception et mise en œuvre de solutions web et mobiles.' },
      //     { name: 'Conception de base de données pour de nombreuses entreprises' },
      //     { name: 'Développer une application Web mobile utilisant GeoCortex et Html5, JQuery et AngularJS.' },
      //     { name: 'Configuration et maintenance des applications Oracle et du serveur de base de données' },
      //     { name: 'Rédiger les rapports de suivi et les rapports techniques.' },
      //   ],
      //   projectCompany: [
      //     {
      //       projectIndex: '1',
      //       type: 'GIS app',
      //       projectName: 'Analysis of the evolution of the coastline north of Sousse (Tunisia).',
      //       projectName_fr: 'Analyse de l\'évolution du littoral au nord de Sousse (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '2',
      //       type: 'GIS app',
      //       projectName: 'Analysis of the coastal erosion of Kerkennah (Tunisia).',
      //       projectName_fr: 'Analyse de l\'érosion côtière de Kerkennah (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //     {
      //       projectIndex: '3',
      //       type: 'GIS app',
      //       projectName: 'Environmental impact assessment of the development of Gammarth marine (Tunisia).',
      //       projectName_fr: 'Etude d\'impact sur l\'environnement du développement de Gammarth marine (Tunisie).',
      //       projectdetails: {
      //         data: '',
      //         visible: false,
      //       },
      //     },
      //   ]
      // }
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
