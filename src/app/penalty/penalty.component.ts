import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingplacesService } from '../parkingplaces.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
 
  constructor(private service:ParkingplacesService, private vserv:VehicleService, private route:ActivatedRoute){
  }

  vehicleId:number=0
  vehicle:any = {
    regNumber:String,
    mark:String,
    name:String
  }
 penalties:any[] = [];
  ngOnInit(): void {
    
        this.vehicleId = +this.route.snapshot.paramMap.get('id')!;

    const vid = localStorage.getItem("vid");
    const vidNumber = vid !== null ? parseInt(vid) : null;

    if (vidNumber !== null) {
      this.vserv.getById(vidNumber).subscribe(
        res => {
          console.log(res);
          this.penalties = res.Penalties;
          this.vehicle = {
            regNumber:res.RegNumber,
            mark:res.Mark,
            name:res.Name,
          }
        },
        err => console.log(err)
      );
    } else {
      console.log('Vehicle ID is null.');
    }

  }
}
