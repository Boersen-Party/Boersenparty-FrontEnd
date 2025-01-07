import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRButtonComponent } from './qrbutton.component';

describe('QRButtonComponent', () => {
  let component: QRButtonComponent;
  let fixture: ComponentFixture<QRButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QRButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QRButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
