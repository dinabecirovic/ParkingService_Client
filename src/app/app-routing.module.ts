import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { LoginnComponent } from './loginn/loginn.component';
import { ErrorComponent } from './error/error.component';
import { MapszonesComponent } from './mapszones/mapszones.component';
import { SearchVehicleComponent } from './search-vehicle/search-vehicle.component';
import { ZoneComponent } from './zone/zone.component';
import { ControlEntryComponent } from './control-entry/control-entry.component';
import { ParkingPlacesComponent } from './parking-places/parking-places.component';
import { ControllersComponent } from './controllers/controllers.component';
import { ZonesComponent } from './zones/zones.component';
import { PenaltiesComponent } from './penalties/penalties.component';
import { ControllerPenaltiesComponent } from './controller-penalties/controller-penalties.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { TicketInputComponent } from './ticket-input/ticket-input.component';
import { InputcodeComponent } from './inputcode/inputcode.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginnComponent },
  { path: 'user-navbar', component: UserNavbarComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'penalty', component: PenaltyComponent },
  { path: 'penalties', component: PenaltiesComponent },
  { path: 'mapszones', component: MapszonesComponent },
  { path: 'zone/:id', component: ZoneComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'search-vehicle', component: SearchVehicleComponent },
  { path: 'control-entry/:id', component: ControlEntryComponent },
  { path: 'parking-places', component: ParkingPlacesComponent },
  { path: 'controllers', component: ControllersComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'penalties', component: PenaltiesComponent },
  { path: 'controller-penalties', component: ControllerPenaltiesComponent },
  { path: 'vehicle-form', component: VehicleFormComponent },
  { path: 'ticket-input', component: TicketInputComponent },
  { path: 'input-code/:code', component: InputcodeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
