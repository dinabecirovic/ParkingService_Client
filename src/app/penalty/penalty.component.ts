import { Component } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent {
  penalties = [
    { date: '2024-06-27', zone: 'A1', reason: 'Prekoračenje vremena' },
  ];
}
