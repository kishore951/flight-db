import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-flights',
  templateUrl: './add-flights.component.html',
  styleUrls: ['./add-flights.component.css']
})
export class AddFlightsComponent implements OnInit {

  constructor( private myapis:ApiService) { }

  name=""
  origin=""
  destination=""
  capacity=""

  readValues=()=>{
    let data={
      "name":this.name,
  "origin":this.origin,
  "destination":this.destination,
  "capacity":this.capacity

    }
    console.log(data)
    this.myapis.addFlights(data).subscribe(
      (data)=>{
        alert("Successfully added")
      }
    )
   this.name=""
  this.origin=""
  this.destination=""
  this.capacity=""

  }


  ngOnInit(): void {
  }

}
