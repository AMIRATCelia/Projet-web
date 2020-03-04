import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fiche-utilisateur',
  templateUrl: './fiche-utilisateur.component.html',
  styleUrls: ['./fiche-utilisateur.component.scss']
})

export class FicheUtilisateurComponent implements OnInit {
  @Input()
  public user: User;

  constructor() { }

  ngOnInit() {
  }
}
