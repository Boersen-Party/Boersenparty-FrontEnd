import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorStatsComponent } from './monitor-stats.component';

describe('MonitorStatsComponent', () => {
  let component: MonitorStatsComponent;
  let fixture: ComponentFixture<MonitorStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
