import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor( private http:HttpClient) { }

//  `http://api.weatherapi.com/v1/forecast.json?key=ef27647426a54ef7868173923232508&q=${cityName}&days=7&alerts=yes`


  getWeather(){
    return this.http.get('http://api.weatherapi.com/v1/forecast.json?key=ef27647426a54ef7868173923232508&q=srinagar&days=7&alerts=yes')
  }
}
