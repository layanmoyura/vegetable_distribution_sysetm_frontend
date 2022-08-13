import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetComponent } from './orderdet.component';

describe('OrderdetComponent', () => {
  let component: OrderdetComponent;
  let fixture: ComponentFixture<OrderdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
