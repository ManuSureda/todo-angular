import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = undefined;
  redirectUrl = undefined;
  loginUrl = "http://localhost:8000/auth/login";

  constructor(private http : HttpClient, private router : Router) { }


  login(loginCredential : LoginCredentials): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const promise = this.http.post(this.loginUrl, loginCredential, httpOptions)
    .toPromise();

    promise
      .then(response => {
        this.token = response['access_token'];
        sessionStorage.setItem('token', this.token);
      })
      .catch(err => {
        console.log(err);
        
      })

    return promise;

  }

  logout() {
    sessionStorage.removeItem('token');
    this.token = undefined;
  }
}
