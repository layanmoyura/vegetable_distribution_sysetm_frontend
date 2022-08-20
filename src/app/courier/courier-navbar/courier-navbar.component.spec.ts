import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierNavbarComponent } from './courier-navbar.component';

describe('CourierNavbarComponent', () => {
  let component: CourierNavbarComponent;
  let fixture: ComponentFixture<CourierNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
