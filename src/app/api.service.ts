import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  fetchFlights=()=>{
    return this.http.get("http://localhost:8080/viewFlights")
  }

  addFlights=(data:any)=>{
    return this.http.post("http://localhost:8080/flightAdd",data)
  }
}
