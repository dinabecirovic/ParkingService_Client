import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mapszones',
  templateUrl: './mapszones.component.html',
  styleUrls: ['./mapszones.component.css']
})
export class MapszonesComponent implements AfterViewInit {
  private map:any;
  namezone:string = "";

  private initMap(): void {
    this.map = L.map('map', {
      center: L.latLng(43.1371, 20.5169),
      zoom: 25
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
  constructor(){
  }

  ngAfterViewInit(): void {
    this.initMap();
      
  }
}
