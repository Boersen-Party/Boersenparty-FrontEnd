import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyHeaderComponent } from './party-header.component';

describe('PartyHeaderComponent', () => {
  let component: PartyHeaderComponent;
  let fixture: ComponentFixture<PartyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
