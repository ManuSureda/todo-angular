import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = "http://localhost:8000/";

  constructor(private http : HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(this.apiUrl + 'clients')
    .toPromise();
  }

  getById(id : string): Promise<any> {
    return this.http.get(this.apiUrl + 'clients/?clientId=' + id)
    .toPromise();
  }
}
