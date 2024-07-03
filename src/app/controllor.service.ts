import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllorService {
   url = 'http://localhost:5001/api/Users/get-all-controllors';

  constructor(private http:HttpClient) { }

  getControllorss(){
    return this.http.get(this.url);
  }
}
