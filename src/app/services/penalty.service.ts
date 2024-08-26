import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {
private url3 = 'http://parkeasyproject.somee.com/api/Penalty'
private url4 = 'http://parkeasyproject.somee.com/removing/'


  constructor(private http:HttpClient) { }
  getPenalties(){
    return this.http.get<any>(this.url3);
  }
  remove(id:number,reason:string) {
    return this.http.post(this.url4+id+"/"+reason,{});
  }
}
