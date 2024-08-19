import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  constructor(private service:VehicleService){}
  tickets = [{
    id:0
  }
    /* { number: '12345', zone: 'A1', validityDate: '2024-06-27' }, */
  ];

  subscriptionTickets = [{
    id:0
    /* { number: '54321', zone: 'A1', validityPeriod: '2024-06-27 to 2025-06-27', vehicleReg: 'BG12345' }, */
  }];

  ngOnInit(): void {
    const vid = localStorage.getItem("vid");
    const vidNumber = vid !== null ? parseInt(vid) : null;

    if (vidNumber !== null) {
      this.service.getById(vidNumber).subscribe(
        res => {
          console.log(res);
          this.tickets = res.oneOffCards;
          this.subscriptionTickets = res.subscriptionCards;
        },
        err => console.log(err)
      );
    } else {
      console.log('Vehicle ID is null.');
    }
  }
  getPenalties() {

  }

  selectedType = 'one-time'; // Default is one-time ticket

  selectType(type: string) {
    this.selectedType = type;
  }
}
