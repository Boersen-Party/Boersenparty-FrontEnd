import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStatisticsComponent } from './general-statistics.component';

describe('GeneralStatisticsComponent', () => {
  let component: GeneralStatisticsComponent;
  let fixture: ComponentFixture<GeneralStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
