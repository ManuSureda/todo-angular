import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input()
  num = 0;

  // gracias a ActivatedRoute podemos acceder a la info del ruteo que se utilizo para llegar aqui ( http://localhost:4200/second-component/0 )
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {// lo que va dentro del .get('esto') debe coincidir con lo que pusiste en el path en app-routing.modules.ts 
    //{ path: 'second-component/:id', component: SecondComponent }, <- con eso, con 'id' 
    this.num = Number(this.route.snapshot.paramMap.get('id'));
    
  }

  changeNumber(numero : number){
    this.num = numero;
  }

}
