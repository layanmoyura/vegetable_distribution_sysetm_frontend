import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerVeiwComponent } from './farmer-veiw.component';

describe('FarmerVeiwComponent', () => {
  let component: FarmerVeiwComponent;
  let fixture: ComponentFixture<FarmerVeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerVeiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
