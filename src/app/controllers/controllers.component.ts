import { Component, OnInit } from '@angular/core';
import { ControllorService } from '../controllor.service';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {
  controllers = [
    { id: 1, firstName: 'Kontrolor', lastName: '1', phoneNumber: '0601234567', email: 'someone@example.com' },
    { id: 2, firstName: 'Kontrolor', lastName: '2', phoneNumber: '0612345678', email: 'someone@example.com' }
  ];
  controllors: any = [];

  constructor(private service:ControllorService) {}

  ngOnInit(): void {

    this.getControllors();
  }

  addController() {
    const firstName = prompt('Unesite ime kontrolora:');
    const lastName = prompt('Unesite prezime kontrolora:');
    const phoneNumber = prompt('Unesite broj telefona kontrolora:');
    const email = prompt('Unesite email kontrolora:');
    if (firstName && lastName && phoneNumber && email) {
      const newController = { id: this.controllers.length + 1, firstName, lastName, phoneNumber, email };
      this.controllers.push(newController);
    }
  }

  editController(controller: any) {
    const firstName = prompt('Unesite novo ime kontrolora:', controller.firstName);
    const lastName = prompt('Unesite novo prezime kontrolora:', controller.lastName);
    const phoneNumber = prompt('Unesite novi broj telefona kontrolora:', controller.phoneNumber);
    const email = prompt('Unesite novi email kontrolora:', controller.email);
    if (firstName && lastName && phoneNumber && email) {
      controller.firstName = firstName;
      controller.lastName = lastName;
      controller.phoneNumber = phoneNumber;
      controller.email = email;
    }
  }

  deleteController(controller: any) {
    const index = this.controllers.indexOf(controller);
    if (index > -1) {
      this.controllers.splice(index, 1);
    }
  }

  getControllors(){
    this.service.getControllorss().subscribe(res => {
      console.log(res);
      this.controllors = res;
    },
    err => console.log(err))
  }
}
