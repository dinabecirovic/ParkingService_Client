import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  zones = [
    { id: 1, name: 'Zona 1', parkingPlaces: 20 },
  ];

  constructor() {}

  ngOnInit(): void {}

  addZone() {
    const name = prompt('Unesite naziv zone:');
    const parkingPlaces = prompt('Unesite broj parking mesta u zoni:');
    if (name && parkingPlaces) {
      const newZone = { id: this.zones.length + 1, name, parkingPlaces: parseInt(parkingPlaces, 10) };
      this.zones.push(newZone);
    }
  }

  editZone(zone: any) {
    const name = prompt('Unesite novi naziv za zonu:', zone.name);
    const parkingPlaces = prompt('Unesite novi broj parking mesta za zonu:', zone.parkingPlaces);
    if (name && parkingPlaces) {
      zone.name = name;
      zone.parkingPlaces = parseInt(parkingPlaces, 10);
    }
  }

  deleteZone(zone: any) {
    const index = this.zones.indexOf(zone);
    if (index > -1) {
      this.zones.splice(index, 1);
    }
  }
}

