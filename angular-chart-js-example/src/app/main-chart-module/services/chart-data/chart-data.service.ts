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

    for (let i = 0; i < this.chartData.length ; i++) {
      let colors = [];

      this.chartData[i].data.map(item => {
        if(item < 25) {
          colors.push('#81d7fa')
        } else if (item > 24 && item < 50) {
          colors.push('#2389d7')
        } else if (item > 49 && item < 75) {
          colors.push('#ffb64d')
        } else if (item > 74) {
          colors.push('#ff3333')
        }
      })

      this.chartColors[i].pointBorderColor = colors;
      this.chartColors[i].pointHoverBackgroundColor = colors;
      this.chartColors[i].pointBackgroundColor = colors;
    }
  }

  static createCard(name: string): void {
    this.chartData.push(
      {
        data: [],
        pointRadius: 5,
        pointBorderWidth: 2,
        label: name,
        fill: false,
        lineTension: 0
      }
    )
  }

  static createNewColor(): void {
    this.chartColors.push(
      {
        backgroundColor: 'rgba('+ Math.floor(Math.random() * Math.floor(256)) + ','
        + Math.floor(Math.random() * Math.floor(256)) + ','
        + Math.floor(Math.random() * Math.floor(256)) + ', 0.1)',
        borderColor: 'rgba('+ Math.floor(Math.random() * Math.floor(256)) + ','
        + Math.floor(Math.random() * Math.floor(256)) + ','
        + Math.floor(Math.random() * Math.floor(256)) + ', 0.5)',
        pointBackgroundColor: [],
        pointBorderColor: [],
        pointHoverBackgroundColor: []
      },
    )
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
    this.chartData = [];
    this.chartColors = [];

    this.createCard('green card');
    this.createNewColor();
    this.createCard('white card');
    this.createNewColor();
    return this.updateValues()
  }
  static updateValues(): chartMainData {

    this.chartData = [];

    this.createCard('green card');
    this.createCard('white card');
    this.getData();

    return {
      chartOptions: this.chartOptions,
      chartData: this.chartData,
      chartColors: this.chartColors,
    }
  }
}
