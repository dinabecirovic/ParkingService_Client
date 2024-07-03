import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingplacesService {

private url = 'http://localhost:5001/api/ParkingPlaces'
private url2 = 'http://localhost:5001/api/Zone'
  constructor(private http:HttpClient) { }
  getAllParkings(){
    return this.http.get<any>(this.url);
  }
  getAllZones(){
    return this.http.get<any>(this.url2);
  }
  getZoneById(id:number){
    return this.http.get<any>(`${this.url2}/${id}`);
    
  }
}
