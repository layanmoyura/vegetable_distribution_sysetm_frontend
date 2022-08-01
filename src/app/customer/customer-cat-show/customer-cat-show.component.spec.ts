import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCatShowComponent } from './customer-cat-show.component';

describe('CustomerCatShowComponent', () => {
  let component: CustomerCatShowComponent;
  let fixture: ComponentFixture<CustomerCatShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCatShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCatShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
