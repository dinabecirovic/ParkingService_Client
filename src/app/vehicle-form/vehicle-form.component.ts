import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      mark: ['', Validators.required],
      name: ['', Validators.required],
      regNumber: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]+')]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      console.log('Vehicle Data:', this.vehicleForm.value);
    }
  }
}
