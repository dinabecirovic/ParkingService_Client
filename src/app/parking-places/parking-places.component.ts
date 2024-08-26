import { Component, OnInit } from '@angular/core';
import { ParkingplacesService } from '../parkingplaces.service';

@Component({
  selector: 'app-parking-places',
  templateUrl: './parking-places.component.html',
  styleUrls: ['./parking-places.component.css']
})
export class ParkingPlacesComponent implements OnInit {
  parkingPlaces:any[] = [
  ];
  disp2:boolean = false;
  street:string = ""
  zones:any[] = []
  selected:number=0
  /**
   *
   */


  constructor(private zs:ParkingplacesService) {}
  

  getAllZones(){
    this.zs.getAllZones().subscribe(
      res => {
        this.zones = res
        console.log(res)

      },
      err => console.log(err)
    )
  }
  getAllParkings() {
    this.zs.getAllParkings().subscribe(
      res => { 
        this.parkingPlaces = res
        console.log(res)

      },
      err => console.log(err)

    )
  }
  ngOnInit(): void {
this.getAllZones()
this.getAllParkings()

  }

  addParkingPlace() {
    const newAddress = prompt('Unesite adresu za novo parking mesto:');
    const newZone = prompt('Unesite zonu za novo parking mesto:');
    if (newAddress && newZone) {
      const newPlace = { id: this.parkingPlaces.length + 1, address: newAddress, zone: newZone };
      this.parkingPlaces.push(newPlace);
    }
  }
  set(){
    this.disp2 = true
  }
  alert(){
    alert(this.selected.toString())
  }
  addPp(){
    this.zs.addParking({Street:this.street,Status:"SLOBODNO",ZoneId:this.selected}).subscribe(
      res =>{
         console.log(res)
         this.parkingPlaces.push(res)
         this.disp2=false
      },
      err => console.log(err)
    )
  }

  editParkingPlace(place: any) {
    const newAddress = prompt('Unesite novu adresu za parking mesto:', place.address);
    const newZone = prompt('Unesite novu zonu za parking mesto:', place.zone);
    if (newAddress && newZone) {
      place.address = newAddress;
      place.zone = newZone;
    }
  }

  deleteParkingPlace(placeId: number) {
   this.zs.deletePp(placeId).subscribe(
     res => {
       console.log(res)
       this.parkingPlaces = this.parkingPlaces.filter(p => p.Id != placeId)
     },
     err => console.log(err)
   )
  }
}
