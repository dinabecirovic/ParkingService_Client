import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: NgForm;
  user: User = {
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    address:"",
    username:"",
    password:""
  }

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.router.navigate(['/login']);
   /* if (this.registerForm.valid) {
      console.log(this.user);
      this.service.register_user(this.user).subscribe(res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
    error => console.log(error));
    this.router.navigate(['/login']);
    } else {
      console.log("Form is invalid");
    }*/
  }
}
