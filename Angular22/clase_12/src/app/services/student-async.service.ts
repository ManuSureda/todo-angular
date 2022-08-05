import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {

  private apiURL = 'https://62659dd65a36b2314d861a37.mockapi.io/finalApi/';

  constructor(private http: HttpClient) { }

  getAll() : Promise<any> {
    return this.http.get(this.apiURL + 'student')
      .toPromise();
  }

  getById(id : Number) : Promise <any> {
    return this.http.get(this.apiURL + 'student/' + id)
      .toPromise();
  }

  add(newStudent: Student): Promise <any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }; 

    return this.http.post(this.apiURL + '/student', newStudent, httpOptions)
      .toPromise();
  }
}
