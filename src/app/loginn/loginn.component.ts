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
  vehicle:any = {}
  buttonText:string = "Prijavi se";
  incorrect:boolean = false;
  constructor(private service:AuthService,  private router:Router){

  }
  hide(){
    this.incorrect = false;
  }

  login(){
    this.buttonText = "Prijavljivanje...";
  let credentials = {
    "username":this.userlog.username,
    "password":this.userlog.password
  };
  this.service.login(credentials).subscribe(res => {
    if(res && res.token){
      localStorage.setItem("token",res.token);
      localStorage.setItem("role",res.user.Role);
      localStorage.setItem("id",res.user.Id);
      if(res.user.Role=="user"){
      this.service.getVehicleOfUser(res.user.Id).subscribe(
        res => {
          console.log(res)
          localStorage.setItem("vid",res.Id)
        },err => {
          console.log(err)
        }
      )
      }
      console.log(res);
      this.router.navigate(['']); 
      
      this.service.getVehicle(res.user.id).subscribe(
        res => {
          console.log(res)
          localStorage.setItem("vehicle",JSON.stringify(res));
        },
        err => console.log(err)
      )
      //this.router.navigate(["courses"]);
    }

  },
  error => { 
    console.log(error);
    this.incorrect = true;
  });
 
}
}


