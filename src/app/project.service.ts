import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from './project';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService
{
  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects",{responseType :"json"})
   .pipe(map(
    (data:Project[])=>{
      for(let j=0;j<=data.length;j++)
      {
        data[j].teamSize=data[j].teamSize*100
      }
    return data;
    }
    ));
  }

  insertProject(newProject: Project): Observable<Project>
  {
    return this.httpClient.post<Project>(this.urlPrefix + "/api/projects", newProject,{responseType :"json"});
  }
   updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + "/api/projects", existingProject,{responseType :"json"});
  }
   deleteProject(projectId: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?projectID="+ projectId);
  }
   searchProject(searchBy: string,searchText:string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects/search/"+"/"+searchText,{responseType :"json"});
  }
}



