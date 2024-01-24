import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZipcodeComponent } from './zipcode/zipcode.component';

import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: ZipcodeComponent
  }
]

@NgModule({
  declarations: [ZipcodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class WeatherModule { }
