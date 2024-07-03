import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerPenaltiesComponent } from './controller-penalties.component';

describe('ControllerPenaltiesComponent', () => {
  let component: ControllerPenaltiesComponent;
  let fixture: ComponentFixture<ControllerPenaltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerPenaltiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerPenaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
