import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  apiURL: string = 'https://62659dd65a36b2314d861a37.mockapi.io/api/';
  constructor(private http: HttpClient) { }

  getAllStudents(): Promise<any>{
    return this.http.get(this.apiURL + 'student').toPromise();
  }

  getStudentById(studentId: number): Promise<any> {
    return this.http.get(this.apiURL + 'student/' + studentId).toPromise();
  }

  getStudentByEmailFake(studentEmail: string): Promise<any> {
    let studentList: Array<Student> = [];

    this.getAllStudents()
      .then(response => {
        studentList = response.slice(0);
      })
      .catch(reason => console.log(reason)
      );
    
    let student = studentList.filter(element => {
      element.email == studentEmail;
    });
    let ans = new Promise((resolve, reject) => {
      if (student != null) {
        resolve(student);
      } else {
        reject('There is no student with that email');
      }
    })
    return ans;
    //tecnivamente esta mal, pero mockapi no me deja modificar los endpoints
  }

  addStudent(newStudent: Student): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.apiURL + 'student', newStudent, httpOptions).toPromise();
  }
}
