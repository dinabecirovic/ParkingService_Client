import { Component, OnInit } from '@angular/core';
import { ParkingplacesService } from '../parkingplaces.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.component.html',
  styleUrls: ['./search-vehicle.component.css']
})
export class SearchVehicleComponent implements OnInit {
  registrationNumber: string = '';
  vehicleInfo: any[] = [];
  private searchSubject = new Subject<string>();
  

  constructor(private vs: VehicleService) {}

  isExpired(card:any) {
    const currentDate = new Date();
    const ticketExpiryDate = new Date(card.Period);
    return ticketExpiryDate < currentDate;
  }
  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300), // Čeka 300ms pre nego što pozove API
      distinctUntilChanged() // Poziva API samo ako je vrednost promenjena
    ).subscribe(searchText => {
      this.vs.searchVehicle(searchText).subscribe(
        res => {
          this.vehicleInfo = res;
          
        },
        err => console.log(err)
      );
    });
  }


  searchVehicles() {
    this.searchSubject.next(this.registrationNumber);
  }
}
