import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFlightsComponent } from './add-flights/add-flights.component';

const appRoutes:Routes=[
{
  path:"",component:AddFlightsComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
