import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  variableEnCarAddComponent = 'car-add.component.ts';

  @Input()
  carListCarAdd = new Array<Car>();

  brand = "";
  model = "";

  constructor() { }

  ngOnInit(): void {
  }

  addCar(){
    let car = new Car();
    
    car.brand = this.brand;
    car.model = this.model;

    this.carListCarAdd.push(car);
  }
}
