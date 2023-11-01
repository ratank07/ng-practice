import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription, filter, map } from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  number  = 3;
  subscription: any

  obs = new Observable((observable) => {
    console.log('obseravles starts')
    observable.next(1);
    observable.next(2);
    observable.next(3);
    observable.next(4);

    setInterval(() => {
      observable.next(++this.number)
    }, 2000)
    // observable.complete()
    // observable.error('some err')
    // observable.next(3);
  }).pipe(filter((data: any) => data > 2), map((value) => { return value * 2}))


  ngOnInit() {
     this.subscription = this.obs.subscribe((data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      })
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

}
