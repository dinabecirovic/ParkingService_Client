import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { LoginnComponent } from './loginn/loginn.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginnComponent },
  { path: 'user-navbar', component: UserNavbarComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'penalty', component: PenaltyComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }