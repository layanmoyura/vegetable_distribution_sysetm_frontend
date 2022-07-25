import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierSignupComponent } from './courier-signup.component';

describe('CourierSignupComponent', () => {
  let component: CourierSignupComponent;
  let fixture: ComponentFixture<CourierSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
