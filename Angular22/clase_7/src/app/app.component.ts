import { Component } from '@angular/core';
import { Student } from './models/student';// -> hay que importar las clases que vayas a usar
import { StudentV2 } from './models/student-v2';

@Component({
  selector: 'app-root', // -> es el nombre del "tag" html ( <app-root></app-root> donde pongas eso, se va a cargar elhtml del app.component.html )
  templateUrl: './app.component.html', //se injecta este html
  styleUrls: ['./app.component.css'] // y se usa este estilo 
})
export class AppComponent {
  title = 'clase_7';// variable que sera accesible desde app.component.html mediante {{ title }} 
  name = 'Manuel Sureda';

  fruits = ['apple', 'orange', 'kiwi'];

  food = true;

  student = new Student();

  student2 = new StudentV2('segundo','student');

  constructor(){
    // let student = new Student();// en este caso te hizo el import automatico, pero en caso contrario fijate arriba el import { Student }
    // student.firstName = 'Jhon';
    // student.lastName = 'Doe';
    // el problema con declararlo ahi es que se volveria una variable local y si no me equivoco NO seria accecible desde el html
    // entonces pasamos a declararlo fuera del constructor, sin el "let" y dentro del constructor dejas el student.firstName = ... pero
    // le agregas el this.
    this.student.firstName = "Jhon";
    this.student.lastName = "Doe";
  }
  
}
