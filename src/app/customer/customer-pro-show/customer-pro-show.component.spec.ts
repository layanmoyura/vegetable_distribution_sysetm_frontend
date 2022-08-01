import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProShowComponent } from './customer-pro-show.component';

describe('CustomerProShowComponent', () => {
  let component: CustomerProShowComponent;
  let fixture: ComponentFixture<CustomerProShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerProShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
