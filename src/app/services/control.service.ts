import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  url:string ="http://parkeasyproject.somee.com/api/Control";

  constructor(private http:HttpClient) { }

  add(c:any){
    return this.http.post(this.url,c)
  }
}
