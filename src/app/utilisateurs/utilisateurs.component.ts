//import { GetUtilisateursService } from './../get-utilisateurs.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<User>;
  items: Observable<any[]>;

  constructor(db: AngularFirestore, private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<User>('Utilisateur');
    this.items = db.collection('Utilisateur').valueChanges();
  }

  //utilisateurs: User[];
  //constructor(private getUsersService: GetUtilisateursService) { }

  ngOnInit() {
    //this.getUsersService.getAllUtilisateurs().subscribe(utilisateurs => this.utilisateurs = utilisateurs);
  }

}
