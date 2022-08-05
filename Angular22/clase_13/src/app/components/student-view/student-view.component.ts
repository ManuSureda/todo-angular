import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  student: Student = new Student();
  constructor(private studentService: StudentAsyncService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentService.getStudentById( Number(this.route.snapshot.paramMap.get('id')) )
      .then(response => {
        this.student = response;
      })
      .catch(reason => {
        console.log(reason);     
      });
  }

}
