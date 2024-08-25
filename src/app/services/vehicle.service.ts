import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  getById(id:Number):Observable<any>{
    return this.http.get("http://parkeasyproject.somee.com/api/Vehicle/"+id);
  }

 
}
