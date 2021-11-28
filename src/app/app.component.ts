import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Test', 'Sample', 'Example'];

  ngOnInit() {
    this.initializeSignupForm();

    this.signupForm.valueChanges.subscribe(result => {
      console.log(result);
    })

    this.signupForm.statusChanges.subscribe(result => {
      console.log(result);
    })

    // this.signupForm.setValue({
    //   'uData': {
    //     'uname': 'Angular',
    //     'uemail': 'test@gmail'
    //   },
    //   'ugender': 'male'
    // });

    this.signupForm.patchValue({
      'uData': {
        'uname': 'Max'
      }
    });
  }

  initializeSignupForm() {
    this.signupForm = new FormGroup({
      'uData': new FormGroup({
        'uname': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'uemail': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'ugender': new FormControl('male')
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }
}
