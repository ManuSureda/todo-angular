import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:8000/products"

  constructor(private httpClient : HttpClient) { }

  getAll() : Promise<any> {
    return this.httpClient.get(this.url) 
      .toPromise();
  }
}
