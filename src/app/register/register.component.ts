import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';

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
    password:"",
    role:""
  }

  constructor(private service: AuthService, private router: Router, private emailService:EmailService) {}

  ngOnInit(): void {}
 generateRandomSixDigitNumber(): number {
    // Generiše nasumičan broj između 100000 i 999999
    return Math.floor(100000 + Math.random() * 900000);
  }

  register() {
    //alert(this.user.role)
    //alert("aaa")
    if (this.registerForm.valid) {
      console.log(this.user);
      this.service.register_user(this.user).subscribe(res => {
        console.log(res);
        this.router.navigate(['/login']);

      },
    error => console.log(error));
    } else {
      console.log("Form is invalid");
    }
  }
  
}
