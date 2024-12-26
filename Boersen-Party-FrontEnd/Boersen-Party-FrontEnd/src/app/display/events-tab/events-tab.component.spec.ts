import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTabComponent } from './events-tab.component';

describe('EventsTabComponent', () => {
  let component: EventsTabComponent;
  let fixture: ComponentFixture<EventsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
