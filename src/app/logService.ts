import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  constructor(public Auth: AngularFireAuth, private Database: AngularFirestore, private router: Router) { }

  getUserState() {
    return this.Auth.authState;
  }

  login( email, password) {
    console.log(`aaaaaaaaaaaaa`);
    this.Auth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
        console.log(`aaaaaaaaaaaaa`);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/menu']);
          console.log(`bbbbbbbbbbbb`);
        }
      })
  }

  logout() {
    return this.Auth.auth.signOut();
  }

}
