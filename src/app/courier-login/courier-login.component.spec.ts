import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierLoginComponent } from './courier-login.component';

describe('CourierLoginComponent', () => {
  let component: CourierLoginComponent;
  let fixture: ComponentFixture<CourierLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
