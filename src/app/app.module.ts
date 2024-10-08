import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { RouterModule } from '@angular/router';
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
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { TicketInputComponent } from './ticket-input/ticket-input.component';
import { InputcodeComponent } from './inputcode/inputcode.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    UserNavbarComponent,
    TicketListComponent,
    PenaltyComponent,
    LoginnComponent,
    ErrorComponent,
    MapszonesComponent,
    SearchVehicleComponent,
    ZoneComponent,
    ControlEntryComponent,
    ParkingPlacesComponent,
    ControllersComponent,
    ZonesComponent,
    PenaltiesComponent,
    ControllerPenaltiesComponent,
    PenaltiesComponent,
    AddvehicleComponent,
    VehicleFormComponent,
    TicketInputComponent,
    InputcodeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
