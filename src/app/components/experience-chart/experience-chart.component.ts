import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataCompanyService } from '../../services/data-company.service';

@Component({
  selector: 'app-experience-chart',
  templateUrl: './experience-chart.component.html',
  styleUrls: ['./experience-chart.component.scss']
})
export class ExperienceChartComponent implements OnInit {
  softwaresLabel = [];
  softwaresyears = [];
  barColor = [];

  BarChart = []; // This will hold our chart info

  softwareList: Array<any>;
  constructor(public dataCompanyService: DataCompanyService) { }
  getRandomColor() {
    for (let i = 0; i < 20; i++) {
    var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    this.barColor.push(color);
  }
    // console.log(this.barColor);
  
  }
  ngOnInit() {
    this.getRandomColor() ;
    let options = {
      responsive: true,
      maintainAspectRatio: false,
      animation: true,
      zoomEnabled: true,
      animationSteps: 120,
      exportEnabled: true,

  
    };
    this.softwareList = this.dataCompanyService.softwareList;

    //if you want desplay all softwares
    /*for (let i = 0; i < this.softwareList.length; i++) {
      for (let j = 0; j < (this.softwareList[i].Softwares).length; j++) {
        this.softwaresLabel.push(this.softwareList[i].Softwares[j].softwareName);
        this.softwaresyears.push(this.softwareList[i].Softwares[j].years);
      
      }*/

    for (let j = 0; j < (this.softwareList[0].Softwares).length; j++) {
      this.softwaresLabel.push(this.softwareList[0].Softwares[j].softwareName);
      this.softwaresyears.push(this.softwareList[0].Softwares[j].years);
    }
    // console.log(this.softwaresLabel);
    // console.log(this.softwaresyears);


    // Bar chart:
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.softwaresLabel,
        datasets: [{
          label: '# of Years',
          data: this.softwaresyears,
          backgroundColor: this.barColor,
          borderColor: [
            'none',
          ],
          borderWidth: 0
        }]
      },
      options: {
        legend: {
          display: false,
        },
        title: {
          text: 'Experience',
          display: false,
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              fontSize: 10,
              fontColor: 'blue',
            },
            gridLines: {
              display: false,
              color: "black"
            },
            scaleLabel: {
              display: false,
              labelString: "Languages",
              fontColor: "green",
              padding: 0,
                            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              fontSize: 10,



            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 9,
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              fontSize: 9,
              fontColor: 'blue',
            },
            afterDataLimits: 10,
            gridLines: {
              display: false,
  
            },
            scaleLabel: {
              display: true,
              labelString: "Number of years",
              fontColor: "green",
              padding: 0,
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              fontSize: 10,

            }
          }]
        },
      }
    });

  }
}


