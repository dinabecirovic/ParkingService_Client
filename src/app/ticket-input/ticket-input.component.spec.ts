import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInputComponent } from './ticket-input.component';

describe('TicketInputComponent', () => {
  let component: TicketInputComponent;
  let fixture: ComponentFixture<TicketInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
