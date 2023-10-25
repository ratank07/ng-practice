import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { person } from './person';

@Component({
  selector: 'app-people-api',
  templateUrl: './people-api.component.html',
  styleUrls: ['./people-api.component.scss']
})
export class PeopleApiComponent implements OnInit, OnDestroy {


  people: any
  person = new person()
  addPersonSubscription: any;
  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
   this.addPersonSubscription =  this.httpService.getPeople().subscribe((data) => {
      console.log('people data', data);
      this.people = data
    })
  }

  addPerson() {
      this.httpService.addPerson(this.person).subscribe((data) => {
        console.log('res data', data);
        this.getPeople();
      })
    }

    ngOnDestroy(): void {
      this.addPersonSubscription.unsubscribe()
    }  
  

}
