import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.component.html',
  styleUrls: ['./search-vehicle.component.css']
})
export class SearchVehicleComponent {
  registrationNumber: string = '';
  vehicleInfo: any;

  constructor(private http: HttpClient) { }

  searchVehicle() {
    this.http.get<any>(`https://your-api-endpoint/vehicles/${this.registrationNumber}`).subscribe(data => {
      this.vehicleInfo = data;
    }, error => {
      console.error('Greška prilikom pretrage vozila:', error);
    });
  }
}
