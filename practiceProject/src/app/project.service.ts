import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  gitUrl = 'https://api.github.com/'
  constructor(private http: HttpClient) { }

  getRepoList(userName: any) {
     return this.http.get(this.gitUrl+'users/'+userName+'/repos')
  }
}
