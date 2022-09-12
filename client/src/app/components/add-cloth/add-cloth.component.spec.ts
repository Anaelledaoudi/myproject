import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClothComponent } from './add-cloth.component';

describe('AddClothComponent', () => {
  let component: AddClothComponent;
  let fixture: ComponentFixture<AddClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
