import { Component, Input, OnInit } from '@angular/core';
import { FormWComponent } from '../form-w/form-w.component';
import { ActivatedRoute } from '@angular/router';
import { CityDataService } from '../city-data.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-w',
  templateUrl: './display-w.component.html',
  styleUrl: './display-w.component.css'
})
export class DisplayWComponent {
  city : string='';
  response:any
  cond:any;
  foreC:any;

  constructor(private route: ActivatedRoute, private cityDataService: CityDataService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      this.cityDataService.getCWeather(this.city).subscribe((data:any)=>{
        this.response=data;
      })

      console.log(this.response)
      this.cond=this.response.current.condition.text;
      
      this.foreC=this.response.forecast.forecastday;
      console.log(this.foreC)
    }); 

  }




  


  


  
  
}
