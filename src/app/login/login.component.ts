import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from './../logService';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [AngularFireAuth]

})
export class LoginComponent implements OnInit {

  loginform = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['',[Validators.required, Validators.maxLength(8)] ],
    });


  constructor(private fb: FormBuilder, private authuser:UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(`aaaaaaaaaaaaa`);
    //debugger;
    this.authuser.login(this.loginform.value.Email, this.loginform.value.Password);
    console.log(`bbbbbbbbbbbb`);
  }
  logout() {

      this.authuser.logout();

  }
}
