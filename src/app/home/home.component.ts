import { Component, OnInit, HostBinding } from '@angular/core';
import { GeolocationServiceService } from '../geolocation-service.service';
import { ApiLatService } from '../api-lat.service';
import { SharedDataService } from '../sharded-data.service';
// Import for error handling
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  

  response!:any
  lat:any;
  lng:any;
  condition:any;
  Img:string=""



  constructor( private geolocationService: GeolocationServiceService, private latapi:ApiLatService, private sharedDataService: SharedDataService){

  }


  getLocation() {
    this.geolocationService.getCurrentPosition()
      .pipe(
        catchError(error => {
          console.error('Error getting geolocation:', error);
          return throwError(error); // Rethrow the error for further handling
        })
      )
      .subscribe({
        next: (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
          this.sharedDataService.setLatLngData(this.lat, this.lng)

        }
      });

   
  }

  ngOnInit(): void {
    this.getLocation();

    this.sharedDataService.getLatLngData().subscribe(({ lat, lng }) => {
        this.latapi.getWeatherL(lat, lng).subscribe((data: any) => {
            this.response = data;
            console.log(this.response);
            this.condition=this.response.current.condition.text
           
        });
    });
}






// @HostBinding('style.backgroundImage') get backgroundImage() {
//   switch (this.condition) {
//     // case 'Sunny':
//     //   return 'url(path/to/sunny.jpg)'; // Replace with your image path
//     // case 'Rainy':
//     //   return 'url(path/to/rainy.jpg)';
//     // case 'Cloudy':
//     //   return 'url(path/to/cloudy.jpg)';
//     case 'Mist':
//       return 'url(https://images.pexels.com/photos/158672/fog-forest-mountain-world-clouds-158672.jpeg?cs=srgb&dl=pexels-pixabay-158672.jpg&fm=jpg)'
//     default:
//       return 'none'; // Set a default background or handle other conditions
//   }
// }





}



