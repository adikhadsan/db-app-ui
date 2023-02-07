import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module/material.module';

import { DashbaordRoutingModule } from './dashbaord-routing.module';
import { DashbaordComponent } from './dashbaord.component';


@NgModule({
  declarations: [
    DashbaordComponent
  ],
  imports: [
    CommonModule,
    DashbaordRoutingModule, 
    MaterialModule,
  ]
})
export class DashbaordModule { }
