import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoginCredentials } from '../../dto/ILoginCredentials';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { Login } from 'src/app/+store/auth/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  form:FormGroup;
  loading:boolean;
  
  constructor(private store: Store<any>,
              private fb:FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

   }

  ngOnInit() {
  }

  login(){
    this.store.dispatch(new Login(this.form.value));
  }


}
