import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @Input() // -> [carList] = "carList" -> en app.component.html
  carList : Array<Car> = new Array<Car>();// se vincula con el del parent (app.component.ts)

  @Output()
  selectedCarEvent = new EventEmitter<Car>();
//app.component.html

  constructor() { }

  ngOnInit(): void {
  }

  selectCar(car : Car){    
    this.selectedCarEvent.emit(car);
  }  

}
