import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  urlO:string = "http://parkeasyproject.somee.com/api/OneOffCard";
  urlS:string = "http://parkeasyproject.somee.com/api/SubscriptionCard";
  constructor(private http:HttpClient) { }

  addOO(oo:any){
    return this.http.post(this.urlO,oo);
  }
  addSS(ss:any){
    return this.http.post(this.urlS,ss);
  }
}
