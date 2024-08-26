import { Component, OnInit } from '@angular/core';
import { PenaltyService } from '../services/penalty.service';

@Component({
  selector: 'app-penalties',
  templateUrl: './penalties.component.html',
  styleUrls: ['./penalties.component.css']
})
export class PenaltiesComponent implements OnInit {
  penalties:any[] = [
    
  ];
  reason:string = ""
  set:number = 0;

  constructor(private ps:PenaltyService) {}

  ngOnInit(): void {
    this.getPenalties()
  }
  getPenalties(){
    this.ps.getPenalties().subscribe(
      res => {
        console.log(res)
        this.penalties = res
      },
      err => console.log(err)
    )
  }

    

  delete(id: number) {
    this.set = id;
    
  }
  cancel(){
    this.set = 0;
  }
  deletePenalty(id:number){
    this.ps.remove(id,this.reason).subscribe(
      res => this.penalties = this.penalties.filter(p => p.Id != id),
      error => console.log(error)
    )
  }
}

