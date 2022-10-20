import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFlightsComponent } from './add-flights/add-flights.component';
import { ViewAllFlightsComponent } from './view-all-flights/view-all-flights.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchFlightComponent } from './search-flight/search-flight.component';

const appRoutes:Routes=[
{
  path:"",component:AddFlightsComponent
},
{
  path:"view",component:ViewAllFlightsComponent
},
{
  path:"search",component:SearchFlightComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFlightsComponent,
    ViewAllFlightsComponent,
    SearchFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
