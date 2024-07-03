import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEntryComponent } from './control-entry.component';

describe('ControlEntryComponent', () => {
  let component: ControlEntryComponent;
  let fixture: ComponentFixture<ControlEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
