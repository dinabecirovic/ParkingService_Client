import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller-penalties',
  templateUrl: './controller-penalties.component.html',
  styleUrls: ['./controller-penalties.component.css']
})
export class ControllerPenaltiesComponent implements OnInit {
  penalties = [
    { id: 1, date: '2024-07-01', amount: 5000, vehicle: 'TT-123-AA', note: 'Napomena 1', reason: 'Razlog 1' }
  ];

  constructor() {}

  ngOnInit(): void {}

  addPenalty() {
    const date = prompt('Unesite datum kazne (YYYY-MM-DD):');
    const amount = prompt('Unesite iznos kazne:');
    const vehicle = prompt('Unesite registarski broj vozila:');
    const note = prompt('Unesite napomenu:');
    const reason = prompt('Unesite razlog kazne:');
    if (date && amount && vehicle && note && reason) {
      const newPenalty = { id: this.penalties.length + 1, date, amount: parseInt(amount, 10), vehicle, note, reason };
      this.penalties.push(newPenalty);
    }
  }
}
