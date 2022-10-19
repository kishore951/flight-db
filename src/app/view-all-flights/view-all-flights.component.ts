import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-flights',
  templateUrl: './view-all-flights.component.html',
  styleUrls: ['./view-all-flights.component.css']
})
export class ViewAllFlightsComponent implements OnInit {

  constructor() { }

  viewFlights=[{"id":1,"name":"Indigo","origin":"India","destination":"china","capacity":"200"},{"id":2,"name":"Spice Jet","origin":"Europe","destination":"America","capacity":"200"},{"id":3,"name":"Go First","origin":"London","destination":"Dubai","capacity":"180"},{"id":4,"name":"Vistara","origin":"India","destination":"Mexico","capacity":"175"},{"id":5,"name":"Air Asia","origin":"India","destination":"Singapore","capacity":"190"}]

  ngOnInit(): void {
  }

}
