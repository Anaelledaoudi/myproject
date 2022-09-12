import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clothink2Component } from './clothink2.component';

describe('Clothink2Component', () => {
  let component: Clothink2Component;
  let fixture: ComponentFixture<Clothink2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clothink2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clothink2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
