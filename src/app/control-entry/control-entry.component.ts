import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from '../services/control.service';

@Component({
  selector: 'app-control-entry',
  templateUrl: './control-entry.component.html',
  styleUrls: ['./control-entry.component.css']
})
export class ControlEntryComponent implements OnInit {
  controlEntry = {
    IsPenalty:true,
    Time: '',
    ControllorId:"",
    VehicleId:0
  };
  /**
   *
   */
   isCorrect:boolean = false
  constructor(private route:ActivatedRoute, private cs:ControlService) {
  }
  ngOnInit(): void {
    const cid = localStorage.getItem("id");
    const cidNumber = cid !== null ? cid.toString() : null;
    this.controlEntry.VehicleId =  +this.route.snapshot.paramMap.get('id')!;
    if(cidNumber!= null) this.controlEntry.ControllorId = cidNumber
      
  }
  

  submitControlEntry() {
    console.log(this.controlEntry)
   this.cs.add(this.controlEntry).subscribe(
     res => this.isCorrect = true,
     err => console.log(err)
   )
    // Benjamine, ovde slanje podataka na backend
  }
}
