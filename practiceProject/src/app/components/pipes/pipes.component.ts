import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

title: string = 'pipe component'
toDate: Date = new Date()

temp: any =  30;


}
