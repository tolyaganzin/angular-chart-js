import { Injectable } from '@angular/core';

export interface ChartColors {
  backgroundColor: string,
  borderColor: string,
  pointBackgroundColor: string[],
  pointBorderColor: string[],
  pointHoverBackgroundColor: string[]
}

export interface ChartData {
  data: any[],
  pointRadius: number,
  pointBorderWidth: number,
  label: string,
  fill: boolean,
  lineTension: number
}

export interface chartMainData {
  chartData: ChartData [];
  chartColors: ChartColors [];
  chartOptions: object;
}

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  static chartData: ChartData [];
  static chartColors: ChartColors [];
  static chartOptions: object;

  constructor() { }

  static getData(): void {
    for (let i = 0; i < 13 ; i++) {
      this.chartData.map((item: { data: number[]; }) => item.data.push(Math.floor(Math.random() * Math.floor(111))));
    }

    let colors = [];
    let colors2 = [];

     this.chartData[1].data.map(item => {
       if(item < 25) {
         colors.push('#81d7fa')
       } else if (item > 24 && item < 50) {
         colors.push('#2389d7')
       } else if (item > 49 && item < 75) {
         colors.push('#ffb64d')
       } else if (item > 74) {
         colors.push('#d43d50')
       } else {
         alert('average: '+item)
       }
     })
     this.chartData[0].data.map(item => {
       if(item < 25) {
         colors2.push('#81d7fa')
       } else if (item > 24 && item < 50) {
         colors2.push('#2389d7')
       } else if (item > 49 && item < 75) {
         colors2.push('#ffb64d')
       } else if (item > 74) {
         colors2.push('#d43d50')
       } else {
         alert('hourly: '+item)
       }
     })
     this.chartColors[1].pointBorderColor = colors;
     this.chartColors[1].pointHoverBackgroundColor = colors;
     this.chartColors[1].pointBackgroundColor = colors;

     this.chartColors[0].pointBorderColor = colors2;
     this.chartColors[0].pointHoverBackgroundColor = colors2;
     this.chartColors[0].pointBackgroundColor = colors2;

     console.log(this.chartData)
  }

  static initValues(): chartMainData {
    this.chartOptions = {
      legend: {
        display:false
      },
      tooltips: {
        callbacks: {
          label: (tooltipItem: { datasetIndex: string | number; yLabel: string; }, data: { datasets: { [x: string]: { label: string; }; }; }) => {
            return data.datasets[tooltipItem.datasetIndex].label +': ' + tooltipItem.yLabel + ' %';
          }
        },
        position: 'average',
        mode: 'index',
        intersect: false,
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: true,
            maxTicksLimit: 12,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            autoSkip: true,
            maxTicksLimit: 10,
            userCallback: (tick: { toString: () => string; }) => {
              return tick.toString() + '%';
            }
          }
        }]
      }
    };

    this.chartData = [
      {
        data: [],
        pointRadius: 5,
        pointBorderWidth: 2,
        label: 'green card',
        fill: false,
        lineTension: 0
      },
      {
        data: [],
        pointRadius: 5,
        pointBorderWidth: 2,
        label: 'white card',
        fill: false,
        lineTension: 0
      }
    ];

    this.chartColors = [
      {
        backgroundColor: 'rgba(50, 0, 0, 0.1)',
        borderColor: 'rgba(50, 0, 0, 0.5)',
        pointBackgroundColor: [],
        pointBorderColor: [],
        pointHoverBackgroundColor: []
      },
      {
        backgroundColor: 'rgba(50, 200, 50, 0.1)',
        borderColor: 'rgba(50, 200, 50, 0.5)',
        pointBackgroundColor: [],
        pointBorderColor: [],
        pointHoverBackgroundColor: []
      }
    ];

    this.getData();
    console.log(this.chartData)

    return {
      chartOptions: this.chartOptions,
      chartData: this.chartData,
      chartColors: this.chartColors,
    }
  }
}
