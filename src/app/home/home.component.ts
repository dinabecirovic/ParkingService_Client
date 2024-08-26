import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ooCard:any = {
    Code:"",
    VehicleId:0
  }
  ssCard:any = {
    Code:"",
    VehicleId:0
  }
  /**
   *
   */
  constructor(private cs:CardService, private router:Router) {
    
    
  }
  ngOnInit(): void {
      this.ooCard.VehicleId = localStorage.getItem("vid");
      this.ssCard.VehicleId = localStorage.getItem("vid");
  }

  addOCard(){
    this.cs.addOO(this.ooCard).subscribe(
      res => {
        alert("Uspesno dodavanje karte!")
        this.router.navigate(['ticket-list'])
      },
      err => alert(err.error)
    )
  }
  addSCard(){
    this.cs.addSS(this.ssCard).subscribe(
      res => {
        alert("Uspesno dodavanje karte!")
        this.router.navigate(['ticket-list'])

      },
      err => alert(err.error)
    )

  }
  isUser(){
    if(localStorage.getItem("role")=='user') return true
    return false
  }


}
