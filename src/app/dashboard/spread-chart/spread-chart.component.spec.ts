import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadChartComponent } from './spread-chart.component';

describe('SpreadChartComponent', () => {
  let component: SpreadChartComponent;
  let fixture: ComponentFixture<SpreadChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
