import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'https://utn-lubnan-api-1.herokuapp.com/';

  constructor(private http : HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(this.apiUrl + 'api/Client')
    .toPromise();
  }

  deleteById(clientId : string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(`${this.apiUrl}api/Client/${clientId}`, httpOptions)
    .toPromise();
  }

}
