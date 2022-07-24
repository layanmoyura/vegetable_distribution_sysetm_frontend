import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNavbarComponent } from './farmer-navbar.component';

describe('FarmerNavbarComponent', () => {
  let component: FarmerNavbarComponent;
  let fixture: ComponentFixture<FarmerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
