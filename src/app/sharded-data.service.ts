import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private latLngDataSubject = new BehaviorSubject<{ lat: any; lng: any }>({lat: 0, lng: 0});

  setLatLngData(lat: any, lng: any) {
    
    this.latLngDataSubject.next({ lat, lng });
  }

  getLatLngData(): Observable<{ lat: any; lng: any }> {
    return this.latLngDataSubject.asObservable();
  }
}
