import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderdet1Component } from './orderdet1.component';

describe('Orderdet1Component', () => {
  let component: Orderdet1Component;
  let fixture: ComponentFixture<Orderdet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Orderdet1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderdet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
