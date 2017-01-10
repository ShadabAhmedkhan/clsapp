import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../nav/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-forgetpassword',
  template:`
 <h3>Please sign in to use all features</h3>
        <form [formGroup]="myForm" (ngSubmit)="updatePassword()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <div class="input-group">
                <label for="password">Confirm Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign In</button>
           
        </form>`
})
export class ForgetpasswordComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';
  firebase: any;
  constructor(private fb: FormBuilder, private authService: AuthService ,router:Router) { }
  updatePassword() {
    this.authService.forgetPassword(this.myForm.value);

  }
  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
