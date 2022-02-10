import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AboutComponent } from "./about/about.component";
import { DashboardService } from "../dashboard.service";

import { FormsModule } from "@angular/forms";
import { ProjectsComponent } from './project/project.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyprofileComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [ CommonModule, FormsModule ],
  exports: [ DashboardComponent, MyprofileComponent, AboutComponent, ProjectsComponent ],
  providers: [ DashboardService ]
})
export class AdminModule
{
}
