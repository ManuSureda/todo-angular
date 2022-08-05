import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:8000/";

  constructor(private http : HttpClient) { }

  getAll(): Promise<any> {

    return this.http.get(this.apiUrl + 'products').toPromise();

  }

}
