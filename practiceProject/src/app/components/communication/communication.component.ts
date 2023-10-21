import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent {

  @Input() firstName: any = "";
  lastName:any =  ''

  @Output() updateParnent: EventEmitter<any> = new EventEmitter<any>;

  updateParentData(childData: any) {
    this.updateParnent.emit(childData)
  }

}
