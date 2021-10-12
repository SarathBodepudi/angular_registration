import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = ["ROLE_USER"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.form

    // Login Success Start
    //this.reloadPage();
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.roles = ["ROLE_USER"];
    // Login Success End

    // If Failed
    //this.errorMessage = 'Login Failure Occured';
    //this.isLoginFailed = true;
  }

  reloadPage(): void {
    window.location.reload();
  }
}
