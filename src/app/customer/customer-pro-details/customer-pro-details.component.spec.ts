import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProDetailsComponent } from './customer-pro-details.component';

describe('CustomerProDetailsComponent', () => {
  let component: CustomerProDetailsComponent;
  let fixture: ComponentFixture<CustomerProDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerProDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
