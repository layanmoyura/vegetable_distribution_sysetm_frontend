import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerEditproductComponent } from './farmer-editproduct.component';

describe('FarmerEditproductComponent', () => {
  let component: FarmerEditproductComponent;
  let fixture: ComponentFixture<FarmerEditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerEditproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerEditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
