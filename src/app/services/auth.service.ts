import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:5001/api/Auth/register';

  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.http.post<any>(`https://localhost:5001/api/Auth/login`, user, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    });
  }

  register_user(user: any) {
    return this.http.post<any>(`https://localhost:5001/api/Auth/register`, user, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    });
  }
}
