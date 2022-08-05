import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private apiURL = 'https://62659dd65a36b2314d861a37.mockapi.io/api/';

  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL+'/client')
      .toPromise();
  }

  delete(clientId: string): Promise<any>{
    return this.http.delete(this.apiURL+'/client/'+clientId)
      .toPromise();
  }
}
