import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataCompanyService } from '../../services/data-company.service';

@Component({
  selector: 'app-experience-chart',
  templateUrl: './experience-chart.component.html',
  styleUrls: ['./experience-chart.component.scss']
})
export class ExperienceChartComponent implements OnInit {
  softwaresLabel = [];
  softwaresyears = [];
  // tslint:disable-next-line:max-line-length
  barColor = ['#E8ADAA', '#ECC5C0', '#EDC9AF', '#FDD7E4', '#FCDFFF', '#FFDFDD', '#FBBBB9', '#FAAFBE', '#FAAFBA', '#F9A7B0', '#E7A1B0', '#E799A3', '#E38AAE', '#F778A1', '#E56E94', '#F660AB'];

  BarChart: any; // This will hold our chart info

  softwareList: Array<any>;
  constructor(public dataCompanyService: DataCompanyService) { }


  ngOnInit() {

    let options = {
      responsive: true,
      maintainAspectRatio: false,
      animation: true,
      zoomEnabled: true,
      animationSteps: 120,
      exportEnabled: true,
    };
    this.softwareList = this.dataCompanyService.softwareList;

    // if you want desplay all softwares
    /*for (let i = 0; i < this.softwareList.length; i++) {
      for (let j = 0; j < (this.softwareList[i].Softwares).length; j++) {
        this.softwaresLabel.push(this.softwareList[i].Softwares[j].softwareName);
        this.softwaresyears.push(this.softwareList[i].Softwares[j].years);
      }*/
    for (let j = 0; j < (this.softwareList[0].Softwares).length; j++) {
      this.softwaresLabel.push(this.softwareList[0].Softwares[j].softwareName);
      this.softwaresyears.push(this.softwareList[0].Softwares[j].years);
    }
    for (let j = 0; j < (this.softwareList[1].Softwares).length; j++) {
      this.softwaresLabel.push(this.softwareList[1].Softwares[j].softwareName);
      this.softwaresyears.push(this.softwareList[1].Softwares[j].years);
    }

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
        plugins: {
          legend: {
            display: false,
          },
          title: {
            text: 'Experience',
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'blue',
            },
            grid: {
              display: false,
              color: "black",
            },
          },
          y: {
            beginAtZero: true,
            min: 0,
            max: 13,
            title: {
              display: true,
              text: "Number of years",
              color: "green",
              padding: 0,

            },
            ticks: {
              color: 'blue',
            },

          },
        }
      },
    }
    )
  }
}