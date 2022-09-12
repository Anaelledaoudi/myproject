import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClosetComponent } from './my-closet.component';

describe('MyClosetComponent', () => {
  let component: MyClosetComponent;
  let fixture: ComponentFixture<MyClosetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClosetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClosetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
