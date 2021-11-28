import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.initializeSignupForm();
  }

  initializeSignupForm() {
    this.signupForm = new FormGroup({
      'uname': new FormControl(null, Validators.required),
      'uemail': new FormControl(null, [Validators.required, Validators.email]),
      'ugender': new FormControl('male')
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
