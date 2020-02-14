import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainChartModuleRoutingModule } from './main-chart-module-routing.module';
import { MainChartComponentComponent } from './main-chart-component/main-chart-component.component';

@NgModule({
  declarations: [MainChartComponentComponent],
  imports: [
    CommonModule,
    MainChartModuleRoutingModule
  ]
})
export class MainChartModuleModule { }
