import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  reserveUrl:string = "http://parkeasyproject.somee.com/api/ParkingPlaces/reserve/"
  vehicleUrl:string = "http://parkeasyproject.somee.com/api/Vehicle/" 

  constructor(private http:HttpClient) { }

  getById(id:Number):Observable<any>{
    return this.http.get(this.vehicleUrl+id);
  }
  searchVehicle(regNumber:string) {
    return this.http.get<any>(`http://parkeasyproject.somee.com/api/Vehicle/search?regNumber=`+regNumber)
  }
  reserve(vid:number,pid:number){
    return this.http.put(this.reserveUrl+vid+'/'+pid,{})
  }
  add(v:any){
    return this.http.post(this.vehicleUrl,v)
  }

 
}
