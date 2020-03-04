import { News } from './../news';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthentificationService } from './../authentification.service';

@Component({
  selector: 'app-ajout-actu',
  templateUrl: './ajout-actu.component.html',
  styleUrls: ['./ajout-actu.component.scss']
})
export class AjoutActuComponent implements OnInit {

  profileForm = this.fb.group({
    titre: ['', [Validators.minLength(12), Validators.required]],
    date: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
    contenu: ['', [Validators.minLength(10), Validators.required]]
  });
  private itemsCollection: AngularFirestoreCollection<News>;
  constructor(private afs: AngularFirestore, private fb: FormBuilder, private auth: AuthentificationService) {
    this.itemsCollection = afs.collection<News>('Actualite');
  }

  ngOnInit() {
  }

  onSubmit() {
    const titre = this.profileForm.value.titre;
    const date = this.profileForm.value.date;
    const contenu = this.profileForm.value.contenu;
    this.auth.connectToFirebase();
    const news: News = {titre, date, contenu};
    this.itemsCollection.add(news);
  }

}
