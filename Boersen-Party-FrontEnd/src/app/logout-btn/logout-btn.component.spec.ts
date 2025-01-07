import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutBtnComponent } from './logout-btn.component';

describe('LogoutBtnComponent', () => {
  let component: LogoutBtnComponent;
  let fixture: ComponentFixture<LogoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
