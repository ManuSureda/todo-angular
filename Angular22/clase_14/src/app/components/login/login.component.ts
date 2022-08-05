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

  constructor(private authService: AuthService, private router: Router) { }

  get email() { return this.loginForm.get('email').value; }
  get password() { return this.loginForm.get('password').value; }

  ngOnInit(): void {
  }

  onSubmit() {
    let loginCredentials = new LoginCredentials();
    loginCredentials.email = this.email;
    loginCredentials.password = this.password;

    this.authService.login(loginCredentials)
      .then(response => {

        if ( this.authService.token ) {

          let redirectUrl = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/products';

          console.log( redirectUrl );
          

          this.router.navigateByUrl(redirectUrl);
        }

      })
      .catch(error => {
        console.log(error);
        
      });
  }

}
