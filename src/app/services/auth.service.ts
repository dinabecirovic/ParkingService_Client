import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:5001/api/Auth/register';

  constructor(private http: HttpClient) {}

  login(model: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, model);
  }

  register_user(user: any) {
    return this.http.post<any>(`https://localhost:5001/api/Auth/register`, user, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    });
  }
}
