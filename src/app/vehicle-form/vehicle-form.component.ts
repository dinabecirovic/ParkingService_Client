import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup;
  vehicle:any = {
    Mark:"",
    Name:"",
    RegNumber:"",
    UserId:""
  }
  isCorrect:boolean = false

  constructor(private fb: FormBuilder, private vs:VehicleService) {
    this.vehicleForm = this.fb.group({
      mark: ['', Validators.required],
      name: ['', Validators.required],
      regNumber: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
    });
  }

  ngOnInit(): void {
    this.vehicle.UserId = localStorage.getItem("id");
  }

  onSubmit(): void {
    this.vs.add(this.vehicle).subscribe(
      res => {
        console.log(res)
        this.isCorrect = true
      },
      err => console.log(err)
    )
    }
  
}
