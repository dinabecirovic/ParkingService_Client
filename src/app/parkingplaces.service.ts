import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingplacesService {

private url = 'http://parkeasyproject.somee.com/api/ParkingPlaces'
//private url2 = 'http://localhost:5001/api/Zone'
//private url2 = 'http://parkeasyproject.somee.com/api/Zone'
private url2 = 'http://parkeasyproject.somee.com/api/Zone'
private url3 = 'http://parkeasyproject.somee.com/myPenalties'
  constructor(private http:HttpClient) { }
  getAllParkings(){
    return this.http.get<any>(this.url);
  }
  addParking(p:any){
    return this.http.post("http://parkeasyproject.somee.com/api/ParkingPlaces",p);
  }
  reserve(place:any, vid:number,pid:string){
    return this.http.put(this.url+'/'+vid+'/'+pid,place, {
      "headers":new HttpHeaders()
                .set("Content-type", "application/json")
                .set("Access-Control-Allow-Origin", "*")
    })
  }
  getPenalties(id:number){
    return this.http.get<any>(this.url3+'/'+id);
  }
  getAllZones(){
    return this.http.get<any>(this.url2);
  }
  getZoneById(id:number){
    return this.http.get<any>(`${this.url2}/${id}`);
    
  }
  deleteZone(id:number){
    return this.http.delete(this.url2+'/'+id)
  }
  deletePp(id:number){
    return this.http.delete("http://parkeasyproject.somee.com/api/ParkingPlaces/"+id)
  }
    updateZone(id:number,zone:any){
      return this.http.put(this.url2+'/'+id, zone, {
        "headers":new HttpHeaders()
                  .set("Content-type", "application/json")
                  .set("Access-Control-Allow-Origin", "*")
      
      })
    }
    addZone(zone:any){
      return this.http.post(this.url2,zone,{
        "headers":new HttpHeaders()
                  .set("Content-type", "application/json")
                  .set("Access-Control-Allow-Origin", "*")
      });
    }
}
