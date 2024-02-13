import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '200ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class BlogComponent implements OnInit {
  blocData = [];
  constructor() {
    this.blocData = [
      {
        id: 6,
        title: 'Clickatell:  Boat tour',
        date: '04/08/2021',
        place: 'Downtown Toronto - ON - Canada',
        text: 'Boat tour with clickatell team to descover ontario Lake.',
        see: false,
        imageSet: [
          '../../../assets/blog/clickatell1/1.jpeg',
          '../../../assets/blog/clickatell1/2.jpeg',
          '../../../assets/blog/clickatell1/3.jpeg',
          '../../../assets/blog/clickatell1/4.jpeg',
        ]
      },
      {
        id: 5,
        title: 'Clickatell:  Party',
        date: '02/03/2019',
        place: 'Downtown Toronto - ON - Canada',
        text: 'Share a great moments with clickatell team',
        see: false,
        imageSet: [
          '../../../assets/blog/clickatell2/1.jpeg',
          '../../../assets/blog/clickatell2/2.jpeg',
          '../../../assets/blog/clickatell2/3.jpeg',
          '../../../assets/blog/clickatell2/4.jpeg',
        ]
      },
      {
        id: 1,
        title: 'Insured connect: Good environement to work',
        date: '04/04/2019',
        place: 'Downtown Toronto - ON - Canada',
        text: 'Great team: sharing knowledges and experiences.',
        see: false,
        imageSet: [
          '../../../assets/blog/insured1.png',
        ]
      },
      {
        id: 2,
        title: 'Best of the Best Scotiabank 2017',
        place: 'Downtown Toronto - King St W- ON - Canada',
        date: '12/05/2017',
        text: 'I was selected as one of Scotiabank\'s Top Individual Performance Award Winners.',
        see: false,
        imageSet: [
          '../../../assets/blog/Scotiabank1/1.jpg',
          '../../../assets/blog/Scotiabank1/2.jpg',
          '../../../assets/blog/Scotiabank1/3.jpg',
          '../../../assets/blog/Scotiabank1/5.jpg']
      },
      {
        id: 3,
        title: 'Scotiabank: Work hard, play hard',
        place: 'Sunnybrook- ON - Canada',
        date: '08/19/2016',
        text: 'Scotiabank: time to play !',
        see: false,
        imageSet: [
          '../../../assets/blog/Scotiabank2/6.JPG',
          '../../../assets/blog/Scotiabank2/2.JPG',
          '../../../assets/blog/Scotiabank2/3.JPG',
          '../../../assets/blog/Scotiabank2/4.JPG',
          '../../../assets/blog/Scotiabank2/5.JPG',
          '../../../assets/blog/Scotiabank2/1.JPG']
      },
      {
        id: 4,
        title: 'Scotiabank: Share culture',
        place: 'Downtown Toronto - King St W- ON - Canada',
        date: '10/31/2016',
        text: 'Scotiabank: Time to enjoy and to share culture !',
        see: false,
        imageSet: [
          '../../../assets/blog/Scotiabank3/3.JPG',
          '../../../assets/blog/Scotiabank3/2.JPG',
          '../../../assets/blog/Scotiabank3/1.JPG',
          '../../../assets/blog/Scotiabank3/4.JPG'
        ]
      },
      {
        id: 5,
        title: 'Scotiabank: 4th place top team (with business team)',
        place: 'Downtown Toronto - King St W- ON - Canada',
        date: '11/30/2016',
        text: 'Scotiabank: win the reward of best of the best team 2016',
        see: false,
        imageSet: [
          '../../../assets/blog/Scotiabank4/1.JPG',
          '../../../assets/blog/Scotiabank4/2.JPG',
          '../../../assets/blog/Scotiabank4/3.JPG'
        ]
      },
      {
        id: 6,
        title: 'Scotiabank: exelent environement to learn',
        place: 'Downtown Toronto - King St W- ON - Canada',
        date: '11/30/2016',
        text: 'Scotiabank: win the reward of best of the best team 2016',
        see: false,
        imageSet: [
          '../../../assets/blog/Scotiabank5/1.JPG',
          '../../../assets/blog/Scotiabank5/2.JPG',
          '../../../assets/blog/Scotiabank5/3.JPG'
        ]
      },
      {
        id: 7,
        title: 'Scotiabank: Meeting with business side',
        place: 'Downtown Toronto - King St W- ON - Canada',
        date: '03/5/2017',
        text: 'Scotiabank: win the reward of best of the best team 2016',
        see: false,
        imageSet: [
          '../../../assets/blog/Scotiabank6/1.JPG',
          '../../../assets/blog/Scotiabank6/2.JPG'
        ]
      },
      {
        id: 8,
        title: 'Scotiabank: Developer team',
        place: 'Downtown Toronto - King St W- ON - Canada',
        date: '05/20/2017',
        text: 'Scotiabank: win the reward of best of the best team 2016',
        see: false,
        imageSet: [
          '../../../assets/blog/Scotiabank7/1.JPG',
          '../../../assets/blog/Scotiabank7/2.JPG',
          '../../../assets/blog/Scotiabank7/3.JPG',
          '../../../assets/blog/Scotiabank7/4.JPG'
        ]
      },
      {
        id: 3,
        title: 'Training',
        Place: 'Calgary- Alberta- Canada',
        date: '01/08/2016',
        text: 'I was instructor for private (25) and public (9) companies : City of Calgary, C.P. RAIL, Rural Municipality of Wallace-Woodworth, M.D. OF BIGHORNE , TOWN OF SYLVAN LAKE, EnviroMak, SPRAY LAKE SAWMILLS , HAMLET OF RANKIN , …) ',
        see: false,
        imageSet: [
          '../../../assets/blog/cansel1.png',
        ]
      },
      {
        id: 4,
        title: 'Collect laser scanner data with the team',
        date: '12/14/2012',
        place: 'Airdrie - Alberta - Canada',
        text: 'A terrestrial laser scanner "Leica HDS 6100" was used to collect data from an electrical substation located in Airdrie, Alberta Canada. The substation had to be scanned from seven different locations. ',
        see: false,
        imageSet: [
          '../../../assets/blog/universityof calgary1.png',
          '../../../assets/blog/universityof calgary2.png']
      },
      {
        id: 4,
        title: 'Collect data in the field',
        Place: 'Gafsa - Tunisia',
        date: '04/09/2011',
        text: ' Collect data of the mine of phosphate in Gafsa/Tunisa , and then we included in the DataBase. Prepare the interface to display and analyse data using web application',
        see: false,
        imageSet: [
          '../../../assets/blog/geomatica1.png',
        ]
      },
    ];
  }
  items = [];

  showItems() {
    this.items = [0, 1, 2, 3, 4];
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }
  ngOnInit() {

  }

}
