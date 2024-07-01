import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapszonesComponent } from './mapszones.component';

describe('MapszonesComponent', () => {
  let component: MapszonesComponent;
  let fixture: ComponentFixture<MapszonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapszonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapszonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
