import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveyComponent } from './delivey.component';

describe('DeliveyComponent', () => {
  let component: DeliveyComponent;
  let fixture: ComponentFixture<DeliveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
