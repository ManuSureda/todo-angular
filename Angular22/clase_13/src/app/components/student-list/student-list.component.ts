import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  errorMsg:string = '';
  studentList: Array<Student> = [];
  constructor(private studentService: StudentAsyncService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents()
      .then(response => {
        this.studentList = [...response];
        this.errorMsg = '';
      })
      .catch(reason => {
        this.errorMsg = reason;
      });
  }

}
