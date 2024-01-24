import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { environment } from './../../../environments/environment';
import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrl: './zipcode.component.css'
})
export class ZipcodeComponent implements OnInit {

  zipCodeFormControl: FormControl = new FormControl('90210');
  dataService = inject(DataService);
  data$: Observable<any> = of('');

  ngOnInit(): void {

  }

  doThing(code: string){
    // const code = this.zipCodeFormControl.value
    this.data$ = this.dataService.getWeatherForZipcode(code).pipe(map((data: any) => {
      return {
        "name": data.name,
        "temp": data.main.temp,
        "max_temp": data.main.temp_max,
        "min_temp": data.main.temp_min,
      }
    }));
  }

}
