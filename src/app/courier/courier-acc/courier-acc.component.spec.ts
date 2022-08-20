import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierAccComponent } from './courier-acc.component';

describe('CourierAccComponent', () => {
  let component: CourierAccComponent;
  let fixture: ComponentFixture<CourierAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
