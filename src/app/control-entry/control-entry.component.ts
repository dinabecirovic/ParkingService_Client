import { Component } from '@angular/core';

@Component({
  selector: 'app-control-entry',
  templateUrl: './control-entry.component.html',
  styleUrls: ['./control-entry.component.css']
})
export class ControlEntryComponent {
  controlEntry = {
    parkingPlace: '',
    controlTime: '',
    registrationNumber: '',
    hasValidTicket: null
  };

  submitControlEntry() {
    console.log('Informacije o kontroli:', this.controlEntry);
    // Benjamine, ovde slanje podataka na backend
  }
}
