import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Array<Student> = [];
  message = "";
  constructor(private studentService: StudentAsyncService) { }

  ngOnInit(): void {
    this.studentService.getAll()
      .then(response => {
        this.studentList = response.splice(0);
      })
      .catch(error => {
        console.log(error);
        this.message = "Sorry there was a problem, try again latter";
      });
  }

}
