import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { FormsModule } from '@angular/forms'; // -> necesario para el [(ngModul)]

@NgModule({
  declarations: [
    AppComponent,
    CarAddComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // -> necesario para el [(ngModul)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
