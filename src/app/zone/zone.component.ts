import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingplacesService } from '../parkingplaces.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements AfterViewInit,OnInit{
 zone:any = {};
constructor(private service:ParkingplacesService, private router:ActivatedRoute){}
ngOnInit(): void {
  
  this.zone = history.state.zone;
    
}
ngAfterViewInit(): void {
   
   
  }
  reserve(){
    
  }
}
