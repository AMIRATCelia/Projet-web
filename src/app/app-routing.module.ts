import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AjoutActuComponent } from './ajout-actu/ajout-actu.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);


export const appRoutes: Routes = [
  { path: '',            component: DashboardComponent  }, // path: '/'
  { path: 'login',    component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome } },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToHome}},
  { path: 'users', component: UtilisateursComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  { path: 'actualite', component: ActualiteComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  { path: 'addActu', component: AjoutActuComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  { path: '**',          redirectTo: '' }

];


@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }
