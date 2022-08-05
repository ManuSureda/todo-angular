import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = "http://localhost:8000/";

  constructor(private http : HttpClient) { }

  getAll() { 
    return this.http.get(this.apiUrl + "companies")
    .toPromise();
  }
  
  getById(id : string) {
    return this.http.get(this.apiUrl + "companies/?id=" + id)
    .toPromise();
  }
}
