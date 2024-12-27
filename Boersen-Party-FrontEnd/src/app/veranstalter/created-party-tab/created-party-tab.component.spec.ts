import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedPartyTabComponent } from './created-party-tab.component';

describe('CreatedPartyTabComponent', () => {
  let component: CreatedPartyTabComponent;
  let fixture: ComponentFixture<CreatedPartyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedPartyTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedPartyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
