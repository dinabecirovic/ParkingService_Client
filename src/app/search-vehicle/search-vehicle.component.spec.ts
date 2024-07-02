import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVehicleComponent } from './search-vehicle.component';

describe('SearchVehicleComponent', () => {
  let component: SearchVehicleComponent;
  let fixture: ComponentFixture<SearchVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
