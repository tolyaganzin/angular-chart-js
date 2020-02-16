import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartsModule } from 'ng2-charts';

import { MainChartModuleRoutingModule } from './main-chart-module-routing.module';
import { MainChartComponentComponent } from './main-chart-component/main-chart-component.component';

@NgModule({
  declarations: [MainChartComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ChartsModule,
    MainChartModuleRoutingModule
  ]
})
export class MainChartModuleModule { }
