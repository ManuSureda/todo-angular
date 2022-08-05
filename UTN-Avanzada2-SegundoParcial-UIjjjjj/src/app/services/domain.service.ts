import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  private apiURL = 'https://utn-lubnan-api-2.herokuapp.com/api/Domain'
  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

  getByName(name: string): Promise<any>{
    return this.http.get(this.apiURL + "/" + name)
      .toPromise();
  }
}
