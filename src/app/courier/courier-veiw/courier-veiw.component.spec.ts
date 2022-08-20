import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierVeiwComponent } from './courier-veiw.component';

describe('CourierVeiwComponent', () => {
  let component: CourierVeiwComponent;
  let fixture: ComponentFixture<CourierVeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierVeiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
