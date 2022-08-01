import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVeiwComponent } from './customer-veiw.component';

describe('CustomerVeiwComponent', () => {
  let component: CustomerVeiwComponent;
  let fixture: ComponentFixture<CustomerVeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerVeiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
