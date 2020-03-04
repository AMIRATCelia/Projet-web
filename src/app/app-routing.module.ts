import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


export const appRoutes: Routes = [
  { path: '',            component: AppComponent }, // path: '/'
  { path: 'login',    component: LoginComponent  },
  { path: 'menu', component: MenuComponent },
  //{ path: '**',          redirectTo: '' }

];


@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }
