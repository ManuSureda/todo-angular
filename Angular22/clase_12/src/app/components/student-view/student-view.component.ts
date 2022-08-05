import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentAsyncService } from 'src/app/services/student-async.service';

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

   errorMsg: String = '';
 
   constructor(private studentService : StudentAsyncService, private route : ActivatedRoute) { }
 
   ngOnInit(): void {//la url (route) en este caso es: '...view/:id' por eso el get('id')

    this.errorMsg = '';

    this.studentId = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getById(this.studentId)
      .then(response => {
        console.log(response);
        this.lastName = response.lastName;
        this.firstName = response.firstName;
        this.dni = response.dni;
        this.email = response.email;
        this.address = response.address;
      })
      .catch(error => {
        this.errorMsg = "Sorry, something went wrong";
      })
  
   }

}
