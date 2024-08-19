import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5001/api/Auth/register';
  private url2 = 'http://localhost:5001/vehicleof/';

  constructor(private http: HttpClient) {}

  get_role() {
    return localStorage.getItem("role");
  }
  isLoggedIn(){
    if(localStorage.getItem('token')) return true;
    return false;
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("vehicle");
  }
  getVehicleOfUser(id:string):Observable<any>{
    return this.http.get("http://localhost:5001/vehicleofuser/"+id);
  }

  login(user: any) {
    return this.http.post<any>(`http://localhost:5001/api/Auth/login`, user, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    });
  }

  getVehicle(id:string){
    return this.http.get(this.url2+id);
  }

  register_user(user: any) {
    return this.http.post<any>(`http://localhost:5001/api/Auth/register`, user, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    });
  }
}
