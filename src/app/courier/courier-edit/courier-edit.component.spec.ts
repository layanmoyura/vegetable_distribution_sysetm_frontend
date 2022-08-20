import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierEditComponent } from './courier-edit.component';

describe('CourierEditComponent', () => {
  let component: CourierEditComponent;
  let fixture: ComponentFixture<CourierEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
