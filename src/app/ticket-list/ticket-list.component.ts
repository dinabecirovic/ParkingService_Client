import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  constructor(private service:VehicleService){}
  tickets:any[] = []

  subscriptionTickets:any[] =[]

  ngOnInit(): void {
  
    const vid = localStorage.getItem("vid");
    const vidNumber = vid !== null ? parseInt(vid) : null;

    if (vidNumber !== null) {
      this.service.getById(vidNumber).subscribe(
        res => {
          console.log(res);
          this.tickets = res.OneOffCards;
          this.subscriptionTickets = res.SubscriptionCards;
          localStorage.setItem("vid",res.Id)
        },
        err => console.log(err)
      );
    } else {
      console.log('Vehicle ID is null.');
    }
  }
  getPenalties() {

  }
  isOk(c:any){
    const currentDate = new Date();
    const ticketExpiryDate = new Date(c.Period);
    return ticketExpiryDate < currentDate;
  }


  selectedType = 'one-time'; // Default is one-time ticket

  selectType(type: string) {
    this.selectedType = type;
  }
}
