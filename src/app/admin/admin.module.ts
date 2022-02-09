import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutComponent } from '../about/about.component';
import { MyprofileComponent } from '../myprofile/myprofile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent,AboutComponent,MyprofileComponent],

  exports:
  {
    DashboardComponent,AboutComponent,MyprofileComponent
  }

})
export class AdminModule { }