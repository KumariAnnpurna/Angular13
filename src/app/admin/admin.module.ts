import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [DashboardComponent,MyprofileComponent,AboutComponent],

  imports: [
    CommonModule
  ],
  

  exports:
  [
    DashboardComponent,MyprofileComponent,AboutComponent
  ]

})
export class AdminModule { }