import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl: string = "http://localhost:8000/";

  constructor(private http : HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(this.apiUrl + 'clients')
    .toPromise();
  }

  getById(clientId : Number): Promise<any>  {
    let specialApi = "https://62659dd65a36b2314d861a37.mockapi.io/finalApi/dsdd/";
    return this.http.get(specialApi + clientId)
    .toPromise();
  }

  deleteClient(id : Number): Promise<any> {
    let specialApi = "https://62659dd65a36b2314d861a37.mockapi.io/finalApi/dsdd/";

    return this.http.delete(specialApi + id)
    .toPromise();
  }
}
