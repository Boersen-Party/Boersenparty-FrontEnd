import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrinkItemWindowComponent } from './add-drink-item-window.component';

describe('AddDrinkItemWindowComponent', () => {
  let component: AddDrinkItemWindowComponent;
  let fixture: ComponentFixture<AddDrinkItemWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDrinkItemWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDrinkItemWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
