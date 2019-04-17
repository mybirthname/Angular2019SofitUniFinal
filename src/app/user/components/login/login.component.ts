import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { Login } from 'src/app/+store/auth/actions';
import { getIsLoadingValue } from 'src/app/+store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  form:FormGroup;
  loading$:Observable<boolean>;
  
  constructor(private store: Store<any>,
              private fb:FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    

    this.loading$ = store.select(getIsLoadingValue);
   }

  ngOnInit() {
  }

  login(){
    this.store.dispatch(new Login(this.form.value));
  }


}
