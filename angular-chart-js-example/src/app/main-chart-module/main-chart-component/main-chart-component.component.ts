import { Component, OnInit } from '@angular/core';
import { ChartColors, ChartData, ChartDataService } from './../services/chart-data/chart-data.service'

@Component({
  selector: 'app-main-chart-component',
  templateUrl: './main-chart-component.component.html',
  styleUrls: ['./main-chart-component.component.css']
})
export class MainChartComponentComponent implements OnInit {

  slectedArea: string = '';
  isZoomIn: boolean = false;

  chartData: ChartData[];
  chartColors: ChartColors[];
  chartLabels: string[] = [
    'Jan','Feb','Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  chartOptions: object;

  constructor() { }

  ngOnInit() {
    this.setData(ChartDataService.initValues())
  }

  setData(res) {
    this.chartData = res.chartData;
    this.chartColors = res.chartColors;
    this.chartOptions = res.chartOptions;
  }

  getData() {
    this.setData(ChartDataService.updateValues())
  }
}
