import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-w',
  templateUrl: './form-w.component.html',
  styleUrl: './form-w.component.css',

})
export class FormWComponent implements OnInit {
    city?:string;

    constructor(private router: Router){

    }

    ngOnInit(): void {
       
        console.log('bwion')
    }
   
    getWeather(event:Event){
      event.preventDefault();
      console.log('City entered:', this.city);
      this.router.navigate(['/weather'], { queryParams: { city: this.city } })
    }
    
    
}
