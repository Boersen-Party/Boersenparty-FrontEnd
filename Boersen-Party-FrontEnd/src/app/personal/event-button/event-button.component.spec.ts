import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventButtonComponent } from './event-button.component';

describe('EventButtonComponent', () => {
  let component: EventButtonComponent;
  let fixture: ComponentFixture<EventButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
