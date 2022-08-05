import { Component } from '@angular/core';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase_8_v2';

  variableEnAppComponent = 'estoy en app.component.ts';

  carApp!: Car;

  carListApp = new Array<Car>();

  showSelectedVehicle(car : Car){
    this.carApp = car;
  }
  
}
