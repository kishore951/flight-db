import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-flights',
  templateUrl: './view-all-flights.component.html',
  styleUrls: ['./view-all-flights.component.css']
})
export class ViewAllFlightsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.fetchFlights().subscribe(
      (data)=>{
        this.viewFlights=data
      }
    )
  }

  viewFlights:any=[]
  ngOnInit(): void {
  }

}
