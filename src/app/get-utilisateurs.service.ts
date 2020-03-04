import { User } from './user';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUtilisateursService {

  constructor() { }

  public getAllUtilisateurs(): Observable<User[]> {
    return of ([{nom: 'DJERROUD', prenom: 'Sonia', mail: 'bs_djerroud@esi.dz', role: 'admin', urlPhoto: ''},
    {nom: 'AMIRAT', prenom: 'Célia', mail: 'ec_amirat@esi.dz', role: 'Client', urlPhoto: ''
    }]);
  }
}
