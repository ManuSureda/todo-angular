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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  message = "";

  constructor(private authService : AuthService, private router : Router) { }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
  }

  onSubmit() {
    let loginCredential = new LoginCredentials();
    loginCredential.email = this.email.value;
    loginCredential.password = this.password.value;

    this.authService.login(loginCredential)
      .then(response => {
        if (this.authService.token) {
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/client';
          this.router.navigateByUrl(redirect);
        } else {
          this.message = "Sorry, something went wrong, please try again";
        }
      })
      .catch(err => {
        console.log(err);
        this.message = "Incorrect email or password";
      })
  }

}
