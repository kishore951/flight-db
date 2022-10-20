import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""

  readValues=()=>{
    let data ={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchFlight(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
  }

  data:any=[
]

  ngOnInit(): void {
  }

}
