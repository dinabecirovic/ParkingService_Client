import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 s:AuthService;
  constructor(ss:AuthService, private vs:VehicleService){
  this.s = ss;
  }
  title = 'ParkEasy';
  

  ngOnInit(): void {
      if(localStorage.getItem("id")!= null) {
        
      }
        
  }
  logout(){
    this.s.logout();
  }
  
}
