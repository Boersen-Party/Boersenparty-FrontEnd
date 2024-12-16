import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerneralStatisticsUserComponent } from './gerneral-statistics-user.component';

describe('GerneralStatisticsUserComponent', () => {
  let component: GerneralStatisticsUserComponent;
  let fixture: ComponentFixture<GerneralStatisticsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerneralStatisticsUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerneralStatisticsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
