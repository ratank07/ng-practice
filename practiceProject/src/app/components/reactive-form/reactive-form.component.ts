import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  contactForm = new FormGroup({
    fName: new FormControl('John'),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pinCode: new FormControl()
    })
  })

  saveContact() {
    console.log(this.contactForm.value)
  }

}
