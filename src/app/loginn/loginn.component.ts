import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Loginuser } from './loginuser';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent {
  userlog:Loginuser = {
    username: "",
    password: ""
  }
  incorrect:boolean = false;
  constructor(private service:AuthService,  private router:Router){

  }
  hide(){
    this.incorrect = false;
  }

  login(){
  let credentials = {
    "username":this.userlog.username,
    "password":this.userlog.password
  };
  this.service.login(credentials).subscribe(res => {
    if(res && res.token){
      localStorage.setItem("token",res.token);
      localStorage.setItem("role",res.user.role);
      console.log(res);
      this.router.navigate(['']); 

      //this.router.navigate(["courses"]);
    }

  },
  error => { 
    console.log(error);
    this.incorrect = true;
  });
 
}
}


