import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothinkComponent } from './clothink.component';

describe('ClothinkComponent', () => {
  let component: ClothinkComponent;
  let fixture: ComponentFixture<ClothinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
