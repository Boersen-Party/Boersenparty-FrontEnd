import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerResourceUsageComponent } from './server-resource-usage.component';

describe('ServerResourceUsageComponent', () => {
  let component: ServerResourceUsageComponent;
  let fixture: ComponentFixture<ServerResourceUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerResourceUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerResourceUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
