import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = undefined;
  redirectUrl = undefined;
  loginUrl = 'https://utn-lubnan-api-1.herokuapp.com/api/User/Login'

  constructor(private http : HttpClient) { }

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
        // console.log(response);
        this.token = response['token'];
        sessionStorage.setItem('token', this.token);
        // console.log(this.token);    
      })
    return promise;
  }

  logout() {
    this.token = undefined;
    sessionStorage.removeItem('token');
  }
}
