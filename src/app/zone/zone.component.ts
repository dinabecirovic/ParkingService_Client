import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingplacesService } from '../parkingplaces.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements AfterViewInit,OnInit{
 zone:any = {};
 vid:any
 isCorrect:boolean = false
constructor(private service:ParkingplacesService, private router:ActivatedRoute, private vs:VehicleService){}
ngOnInit(): void {
  
  this.zone = history.state.zone;
  this.vid = localStorage.getItem("vid")
}
ngAfterViewInit(): void {
   
   
  }
  isReserved(place:any){
    if(place.VehicleId != null) return true
    return false
  }
  isMy(){
    
  }
  
  reserve( pid:number){
    this.vs.reserve(this.vid,pid).subscribe(
      res =>{
         console.log(res)
         this.isCorrect = true
         setTimeout(() => {
           this.isCorrect = false
         }, 2000);
      },
      err => console.log(err)
    )
  }
}
