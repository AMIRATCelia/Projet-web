import { Component } from '@angular/core';
//import { Utilisateur } from './utilisateur';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portail-web';
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore, public auth: AngularFireAuth) {
    this.items = firestore.collection('items').valueChanges();
  }
}
