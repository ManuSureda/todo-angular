import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module'; estaba asi 
import { AppRoutingModule } from './app-routing/app-routing.module'; //y queda asi 
// ese import se hizo automatico cuando generaste el proyecto, ya que le diste "yes" a la opcion de routing,
// si el profe te da un projecto sin routing, lo tendras que generar a mano
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule// esto tambien lo tendrias que agregar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
