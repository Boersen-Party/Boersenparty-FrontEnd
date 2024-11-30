import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTriggerWindowComponent } from './event-trigger-window.component';

describe('EventTriggerWindowComponent', () => {
  let component: EventTriggerWindowComponent;
  let fixture: ComponentFixture<EventTriggerWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTriggerWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTriggerWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

