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
    console.log(`Mail : ${this.loginform.value.Email}`);
    console.log(`PassWord : ${this.loginform.value.Password}`);
  }
  login(loginForm) {
    console.log(`aaaaaaaaaaaaa`);
    this.authuser.login(loginForm.value.Email, loginForm.value.Password);
    console.log(`bbbbbbbbbbbb`);
  }
  logout() {

      this.authuser.logout();

  }
}
