import { Component, OnInit } from '@angular/core';
import { ParkingplacesService } from '../parkingplaces.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  zones:any[] = [];
  zone:any = {};
  disp:boolean = false;
  disp2:boolean = false;
  zoneU:any = {
  
    Name: "",
    NumberOfPlaces: 0,
    Address:""
  }
  zoneNew:any = {
  
    Name: "",
    NumberOfPlaces: 0,
    Address:""
  }

  constructor(private service:ParkingplacesService) {}

  ngOnInit(): void {this.getZones();}

  add() {
    
    this.disp2 = true;
  }
  addZone(zone:any){
    this.service.addZone(zone).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  editZone(id:number, zone: any) {
    this.zone = zone;
    this.disp = !this.disp;

  /* const name = prompt('Unesite novi naziv za zonu:', zone.name);
    const parkingPlaces = prompt('Unesite novi broj parking mesta za zonu:', zone.parkingPlaces);
    if (name && parkingPlaces) {
      zone.name = name;
      zone.parkingPlaces = parseInt(parkingPlaces, 10);
    }*/
    
  }
  edit(id:number,zone:any){
    this.service.updateZone(id,zone).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

  deleteZone(zone: any) {
    this.service.deleteZone(zone.id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  getZones(){
    this.service.getAllZones().subscribe(res => {
      console.log(res);
      this.zones = res;
    }, err => console.log(err));
  }
}

