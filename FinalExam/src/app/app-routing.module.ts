import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { clientListComponent } from './components/client-list/client-list.component';
import { LoginComponent } from './components/login/login.component';

    const routes: Routes = [
        { path: 'login', component: LoginComponent },
        { path: 'client', component: clientListComponent },
        { path: '', redirectTo: '/client', pathMatch: 'full' }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }