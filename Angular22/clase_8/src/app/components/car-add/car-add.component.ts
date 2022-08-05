import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
//car-add.component.ts
export class CarAddComponent implements OnInit {
  @Input()
  carList : Array<Car> = new Array<Car>();//viene del padre (app.component.ts), NO es una copia, es el mismo array que tenes en el parent
  brand!: string;
  model!: string;

  constructor() { }

  ngOnInit() {
  }

  addCar()
  {
    let car = new Car();
    car.brand = this.brand;
    car.model = this.model;

    this.carList.push(car);//lo que agregues aca se modifica en el del parent
  }
}

