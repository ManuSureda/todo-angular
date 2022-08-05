import { Component } from '@angular/core';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Cars Application Example';
    carList = new Array<Car>();// arreglo vacio para mostrar la lista de autos (esto le va a llegar a los child)
    //y a su vez lo que se modifique en el child (agregar o quitar) se va a modificar en este, ya que es exactamente el mismo array
    //no es que el child tenga una copia
    car = new Car();// esto es para el h4
    

//app.component.html ($event)
    showSelectedCar(car : Car) {
      this.car = car;
    }
}
