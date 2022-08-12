import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccComponent } from './customer-acc.component';

describe('CustomerAccComponent', () => {
  let component: CustomerAccComponent;
  let fixture: ComponentFixture<CustomerAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
