import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcodeComponent } from './inputcode.component';

describe('InputcodeComponent', () => {
  let component: InputcodeComponent;
  let fixture: ComponentFixture<InputcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
