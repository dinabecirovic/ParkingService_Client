import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 s:AuthService;
  constructor(ss:AuthService){
  this.s = ss;
  }
  title = 'nbp-1';

  logout(){
    this.s.logout();
  }
}
