import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.scss']
})
export class TempDrivenFormComponent {

  contactDetails = {
    name: 'Ratan',
    email: 'abc@gamil.com',
    address: {
      city: 'Pune', pinCode: 124332
    }
  }

  submitForm(myForm: any) {

    console.log(myForm.value)

  }

  resetForm(contactForm: any) {
    contactForm.resetForm()
  }

  //patch values in template

  patchValuesInForm(contactForm: any) {
    let obj = {
      fname: 'John',
      email: 'abcd@gamil.com',
      address: {
        city: 'Mumbai', pinCode: 124332
      }
    }

      contactForm.control.patchValue(obj)
    
  }


}
