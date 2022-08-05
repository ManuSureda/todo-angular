import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from '../components/first/first.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SecondComponent } from '../components/second/second.component';

const routes: Routes = [
  //en path seria lo que diga la url, no necesariamente tiene que ser first-component, podia ser primerJamonDelMedio
  //en component si es importante que pongas el nombre de la clase exportada por el componente que quieras usar:
  //si te vas a first.component.ts vas a ver: export class FirstComponent implements OnInit 
  { path: 'first-component', component: FirstComponent },
  { path: 'salsa', component: FirstComponent },//http://localhost:4200/salsa
  //<a routerLink="/second-component/18></a> <-- app.component.html 
  { path: 'second-component/:id', component: SecondComponent },
        //                  path:'first....
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  // el pathMatch: 'full': https://youtu.be/eubVhx3hbnI?list=PL5zQBNVD_BMs51U7dXh4XtLXZwYiIh8Hd&t=1522
  // quiere decir que tiene que la url tiene que ser totalmente http://localhost:4200/, ya que 
  // angular cuando toma una url la lee de izquierda a derecha e invoca el primer route que coincida, 
  // muchas veces la primera lectura que se hace de una ruta es '', entonces hay que acegurarse de que no sea cualquier ruta
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//-> quiere decir que se va a inicializar a nivel raiz de la aplicacion ( https://youtu.be/eubVhx3hbnI?list=PL5zQBNVD_BMs51U7dXh4XtLXZwYiIh8Hd&t=849 )
  exports: [RouterModule] // esto nos permite exponerlo al resto de los componentes
})
export class AppRoutingModule { }
