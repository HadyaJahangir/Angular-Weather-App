import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import { SharedDataService } from './sharded-data.service';
import { Component, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiLatService implements OnInit{

  getWeatherL(lat: any, lng: any){
    console.log("cbu")
    console.log(lat)
    console.log("cbu")
  
return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=ef27647426a54ef7868173923232508&q=${lat},${lng}&days=7&alerts=yes`)
  }

  constructor(private http:HttpClient, private sharedDataService: SharedDataService) {

   }

   ngOnInit(): void {  // Or any appropriate lifecycle hook
    this.sharedDataService.getLatLngData().subscribe(({ lat, lng }) => {
      this.getWeatherL(lat, lng); // Call getWeatherL with available lat and lng
    });
  }

 
}
