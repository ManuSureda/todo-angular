import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  // private student!: Student;

  studentId: number = -1;
  lastName: string = '';
  firstName: string = '';
  dni: string = '';
  email: string = '';
  address: string = '';

  constructor(private studentService : StudentService, private route : ActivatedRoute) { }

  ngOnInit(): void {//la url (route) en este caso es: '...view/:id' por eso el get('id')
    let studentId = Number(this.route.snapshot.paramMap.get('id'));

    let studentAux = this.studentService.getById(studentId);

    if(studentAux != null){
      this.studentId = studentAux.studentId;
      this.lastName = studentAux.lastName;
      this.firstName = studentAux.firstName;
      this.dni = studentAux.dni;
      this.email = studentAux.email;
      this.address = studentAux.address;
    } 
  }

}
