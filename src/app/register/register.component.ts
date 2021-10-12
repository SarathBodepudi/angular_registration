import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

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

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    // Sign Up Success Start
    //console.log('Sign Up success');
    //this.isSuccessful = true;
    //this.isSignUpFailed = false;
    // Sign Up Success End

    // If Failed
    //this.errorMessage = 'Sign Up Failure Occured';
    //this.isSignUpFailed = true;

    this.authService.register(username, email, password).subscribe(
     
      data => {
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(username);
        console.log(email);
        console.log(password);
        //this.errorMessage = err.error.message;
        //this.isSignUpFailed = true;
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      }
    );

  }

}
