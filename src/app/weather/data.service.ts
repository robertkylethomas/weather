import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient);

  regex: RegExp = /[0-9]{5}/gm;
  constructor() { }

  getWeatherForZipcode(zipCode: string){
    // if(this.regex.test(zipCode)){
      console.log('lets see if this works :) ')
      console.log(this.regex.test(zipCode));
      return this.http.get(`${environment.api}?appid=${environment.apiKey}&zip=${zipCode},US`) as Observable<any>;
    // }
    // return EMPTY;
  }
}
