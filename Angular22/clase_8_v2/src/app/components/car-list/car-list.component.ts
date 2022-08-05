import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input()
  carList = new Array<Car>();

  @Output()
  selectedCarEvent = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedCar(car : Car){
    this.selectedCarEvent.emit(car);
  }

}
