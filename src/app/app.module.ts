import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UtilisateursComponent  } from './utilisateurs/utilisateurs.component';
import { FicheUtilisateurComponent } from './fiche-utilisateur/fiche-utilisateur.component';
import { RouterModule } from '@angular/router';
import { ActualiteComponent } from './actualite/actualite.component';
import { FicheActualiteComponent } from './fiche-actualite/fiche-actualite.component';
import { AjoutActuComponent } from './ajout-actu/ajout-actu.component';
import { MatTreeModule } from '@angular/material/tree';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AngularFireAuth } from '@angular/fire/auth';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    UtilisateursComponent,
    FicheUtilisateurComponent,
    ActualiteComponent,
    FicheActualiteComponent,
    AjoutActuComponent,
    DashboardComponent



  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatTreeModule,
    MatGridListModule,
    MatMenuModule



  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

