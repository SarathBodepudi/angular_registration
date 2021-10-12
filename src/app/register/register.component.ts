import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    // Sign Up Success Start
    console.log('Sign Up success');
    this.isSuccessful = true;
    this.isSignUpFailed = false;
    // Sign Up Success End

    // If Failed
    //this.errorMessage = 'Sign Up Failure Occured';
    //this.isSignUpFailed = true;
  }

}
