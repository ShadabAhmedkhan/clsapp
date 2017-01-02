import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../nav/auth.service";
import { Router } from "@angular/router";
import {userInfo} from "os";
@Component({
  selector: 'app-signin',
  template:`
 <h3>Please sign up to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignin()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
        </form>`
})
export class SigninComponent implements OnInit{

  myForm: FormGroup;
  error = false;
  errorMessage = '';
   firebase: any;

  constructor(private fb: FormBuilder, private authService: AuthService ,router:Router) {}

  onSignin() {
    this.authService.signinUser(this.myForm.value);

  }
// Osignin(){ .firebase.router.navigate(['recpies']);
//     this.authService.signin(this.myForm.value);
// }
//   isAuth() {
//     this.authService.isAuthenticated();
//     return this.Router.navigated(['recpies']);
//     // this.router.navigate(['recpies']);
//   }
  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
