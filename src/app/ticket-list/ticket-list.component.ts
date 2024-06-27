import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  tickets = [
    { number: '12345', zone: 'A1', validityDate: '2024-06-27' },
  ];

  subscriptionTickets = [
    { number: '54321', zone: 'A1', validityPeriod: '2024-06-27 to 2025-06-27', vehicleReg: 'BG12345' },
  ];

  selectedType = 'one-time'; // Default is one-time ticket

  selectType(type: string) {
    this.selectedType = type;
  }
}
