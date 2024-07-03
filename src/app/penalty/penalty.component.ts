import { Component, OnInit } from '@angular/core';
import { ParkingplacesService } from '../parkingplaces.service';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  constructor(private service:ParkingplacesService){}
  vehicle:any = {}
 penalties:any[] = [];
  ngOnInit(): void {
    const storedVehicle = localStorage.getItem('vehicle');
    if (storedVehicle) {
      this.vehicle = JSON.parse(storedVehicle);
    }
     this.service.getPenalties(this.vehicle.id).subscribe(
      res =>{
         console.log(res);
         this.penalties = res;
      },
      err => console.log(err)
    )

  }
}
