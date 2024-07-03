import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-places',
  templateUrl: './parking-places.component.html',
  styleUrls: ['./parking-places.component.css']
})
export class ParkingPlacesComponent implements OnInit {
  parkingPlaces = [
    { id: 1, address: 'Adresa 1', zone: 'Zona 1' },
    { id: 2, address: 'Adresa 2', zone: 'Zona 2' },
  ];

  constructor() {}

  ngOnInit(): void {}

  addParkingPlace() {
    const newAddress = prompt('Unesite adresu za novo parking mesto:');
    const newZone = prompt('Unesite zonu za novo parking mesto:');
    if (newAddress && newZone) {
      const newPlace = { id: this.parkingPlaces.length + 1, address: newAddress, zone: newZone };
      this.parkingPlaces.push(newPlace);
    }
  }

  editParkingPlace(place: any) {
    const newAddress = prompt('Unesite novu adresu za parking mesto:', place.address);
    const newZone = prompt('Unesite novu zonu za parking mesto:', place.zone);
    if (newAddress && newZone) {
      place.address = newAddress;
      place.zone = newZone;
    }
  }

  deleteParkingPlace(place: any) {
    const index = this.parkingPlaces.indexOf(place);
    if (index > -1) {
      this.parkingPlaces.splice(index, 1);
    }
  }
}
