import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChartComponentComponent } from './main-chart-component.component';

describe('MainChartComponentComponent', () => {
  let component: MainChartComponentComponent;
  let fixture: ComponentFixture<MainChartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
