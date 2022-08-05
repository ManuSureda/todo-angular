import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = undefined;
  loginUrl = "http://localhost:8000/auth/login";
  redirectUrl = undefined;

  constructor(private http: HttpClient) { }

  login(loginCredentials: LoginCredentials): Promise<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const promise = this.http.post(this.loginUrl, loginCredentials, httpOptions)
    .toPromise();

    promise
      .then(response => {
        this.token = response['access_token'];

        sessionStorage.setItem('token', this.token);
      })
      .catch(error => {
        console.log(error);
        
      })
    
    return promise;

  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.token = undefined;
  }

}
