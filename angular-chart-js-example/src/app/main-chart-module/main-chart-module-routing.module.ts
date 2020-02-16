import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainChartComponentComponent } from './main-chart-component/main-chart-component.component';

const routes: Routes = [
  {path: '', component: MainChartComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainChartModuleRoutingModule { }
