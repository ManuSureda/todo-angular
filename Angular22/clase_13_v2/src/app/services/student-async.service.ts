import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  apiURL = "https://62659dd65a36b2314d861a37.mockapi.io/finalApi/";
  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(this.apiURL + 'student')
      .toPromise();
  }

  getById(id: Number): Promise<any> {
    return this.http.get(this.apiURL + 'student/' + id)
      .toPromise();
  }

  getByEmailFake(studentEmail: string): Promise<any> {
    let studentList: Array<Student> = [];

    this.getAll()
      .then(response => {
        studentList = response;
      })
      .catch(error => {
        console.log(error);
      });
    
    let student = studentList.filter(element => {
      element.email == studentEmail;
    });

    let ans = new Promise((resolve, rejects) => {
      if (student != null){
        resolve(student);
      } else {
        rejects(null);
      }
    });
    return ans;
  }

  add(newStudent: Student): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };

    return this.http.post(this.apiURL + 'student', newStudent, httpOptions)
      .toPromise();
  }
}
