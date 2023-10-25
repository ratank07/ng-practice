import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: any = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getPeople() {
      return  this.http.get(this.baseUrl + 'people')
  }

  addPerson(person: any) {
    const headers = {'content-type':'application/json'};
    const body = JSON.stringify(person);
    return this.http.post(this.baseUrl + 'people', body,  {headers} )
  }
}
