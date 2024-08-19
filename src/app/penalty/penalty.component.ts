import { Component, OnInit } from '@angular/core';
import { ParkingplacesService } from '../parkingplaces.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
 
  constructor(private service:ParkingplacesService, private vserv:VehicleService){
  }
  vehicle:any = {
    regNumber:String,
    mark:String,
    name:String
  }
 penalties:any[] = [];
  ngOnInit(): void {
    
    
    const vid = localStorage.getItem("vid");
    const vidNumber = vid !== null ? parseInt(vid) : null;

    if (vidNumber !== null) {
      this.vserv.getById(vidNumber).subscribe(
        res => {
          console.log(res);
          this.penalties = res.penalties;
          this.vehicle = {
            regNumber:res.regNumber,
            mark:res.mark,
            name:res.name,
          }
        },
        err => console.log(err)
      );
    } else {
      console.log('Vehicle ID is null.');
    }

  }
}
