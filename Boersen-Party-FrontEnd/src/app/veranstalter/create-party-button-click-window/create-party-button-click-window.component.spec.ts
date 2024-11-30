import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePartyButtonClickWindowComponent } from './create-party-button-click-window.component';

describe('CreatePartyButtonClickWindowComponent', () => {
  let component: CreatePartyButtonClickWindowComponent;
  let fixture: ComponentFixture<CreatePartyButtonClickWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePartyButtonClickWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePartyButtonClickWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
