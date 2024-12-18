import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import here
import { GeolocationServiceService } from './geolocation-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayWComponent } from './display-w/display-w.component';
import { FormWComponent } from './form-w/form-w.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayWComponent,
    FormWComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GeolocationServiceService,
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
