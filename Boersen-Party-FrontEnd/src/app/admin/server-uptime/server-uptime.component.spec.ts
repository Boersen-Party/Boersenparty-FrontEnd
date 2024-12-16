import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUptimeComponent } from './server-uptime.component';

describe('ServerUptimeComponent', () => {
  let component: ServerUptimeComponent;
  let fixture: ComponentFixture<ServerUptimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerUptimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerUptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
