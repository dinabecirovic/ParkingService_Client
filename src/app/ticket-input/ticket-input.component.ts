import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-input',
  templateUrl: './ticket-input.component.html',
  styleUrls: ['./ticket-input.component.css']
})
export class TicketInputComponent {

  onSubmitTicket() {
    const ticketNumber = (document.getElementById('ticketNumber') as HTMLInputElement).value;
    console.log('Broj karte:', ticketNumber);
  }
}
