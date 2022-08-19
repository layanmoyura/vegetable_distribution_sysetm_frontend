import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAccComponent } from './farmer-acc.component';

describe('FarmerAccComponent', () => {
  let component: FarmerAccComponent;
  let fixture: ComponentFixture<FarmerAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
