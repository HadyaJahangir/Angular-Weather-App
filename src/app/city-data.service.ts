import { Injectable , Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DisplayWComponent } from './display-w/display-w.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityDataService implements OnInit{


  constructor(private http:HttpClient) { }

  getCWeather(city: string):Observable<any> {
    // Implement logic to fetch weather data using HttpClient
    console.log(`Fetching weather data for city: ${city}`); // Placeholder for actual implementation
    // Use this.http to make an API call to your weather data source
    return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=ef27647426a54ef7868173923232508&q=${city}&days=7&alerts=yes`)

    // ...
  }

  ngOnInit(): void {
    
      
  }


}
