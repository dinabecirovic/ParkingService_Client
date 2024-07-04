import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://benjaminramovic-001-site1.htempurl.com/api/Auth/register';
  private url2 = 'http://benjaminramovic-001-site1.htempurl.com/vehicleofuser/';

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

  login(user: any) {
    return this.http.post<any>(`http://benjaminramovic-001-site1.htempurl.com/api/Auth/login`, user, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    });
  }

  getVehicle(id:string){
    return this.http.get(this.url2+id);
  }

  register_user(user: any) {
    return this.http.post<any>(`http://benjaminramovic-001-site1.htempurl.com/api/Auth/register`, user, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    });
  }
}
