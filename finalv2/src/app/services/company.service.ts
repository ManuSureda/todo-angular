import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = "http://localhost:8000/";

  constructor(private http : HttpClient) { }

  getById(companyId : string): Promise<any> {
    return this.http.get(this.apiUrl + 'companies/?id=' + companyId)
    .toPromise();
  }
}
