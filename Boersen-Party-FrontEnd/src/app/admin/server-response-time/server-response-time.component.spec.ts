import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerResponseTimeComponent } from './server-response-time.component';

describe('ServerResponseTimeComponent', () => {
  let component: ServerResponseTimeComponent;
  let fixture: ComponentFixture<ServerResponseTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerResponseTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerResponseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
