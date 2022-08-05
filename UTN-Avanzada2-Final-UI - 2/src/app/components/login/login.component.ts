import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginCredentials } from 'src/app/models/login-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = "";

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService : AuthService, private router : Router) { }

  get email() { return this.loginForm.get('email'); } 
  get password() { return this.loginForm.get('password'); } 

  ngOnInit(): void {
  }

  onSubmit() {
    let loginCredentials = new LoginCredentials();
    loginCredentials.email = this.email.value;
    loginCredentials.password = this.password.value;

    this.authService.login(loginCredentials)
      .then(response => {
        if ( this.authService.token ) {
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/client';
          this.router.navigateByUrl(redirect);
        } else {
          this.message = "Sorry, something went wrong, please try again later";
        }
      })
      .catch(err => {
        console.log(err);
        
      })
  }

}
