import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-penalties',
  templateUrl: './penalties.component.html',
  styleUrls: ['./penalties.component.css']
})
export class PenaltiesComponent implements OnInit {
  penalties = [
    { id: 1, date: '2024-07-01', amount: 5000, vehicle: 'TT-123-AA', note: 'Napomena 1', reason: 'Razlog 1' },
  ];

  constructor() {}

  ngOnInit(): void {}

  editPenalty(penalty: any) {
    const date = prompt('Unesite novi datum:', penalty.date);
    const amount = prompt('Unesite novu cenu:', penalty.amount);
    const vehicle = prompt('Unesite novo vozilo:', penalty.vehicle);
    const note = prompt('Unesite novu napomenu:', penalty.note);
    const reason = prompt('Unesite novi razlog:', penalty.reason);
    if (date && amount && vehicle && note && reason) {
      penalty.date = date;
      penalty.amount = amount;
      penalty.vehicle = vehicle;
      penalty.note = note;
      penalty.reason = reason;
    }
  }

  deletePenalty(penalty: any) {
    const index = this.penalties.indexOf(penalty);
    if (index > -1) {
      this.penalties.splice(index, 1);
    }
  }
}

