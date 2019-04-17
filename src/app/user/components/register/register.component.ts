import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {Store} from '@ngrx/store';
import { Register } from 'src/app/+store/auth/actions';
import { Observable } from 'rxjs';
import { getIsLoading } from 'src/app/+store/auth/selectors';
import { getIsAuthenticated, getIsLoadingValue } from 'src/app/+store';
import { IState } from 'src/app/+store/auth/reducer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading$:Observable<boolean>;

  form:FormGroup;
  constructor(private fb:FormBuilder, 
              private store: Store<any>)  { 

    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      username:['',[Validators.required]],
      address: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {validators:this.passCheck})
    });

    this.loading$ = this.store.select(getIsLoadingValue);

  }

  ngOnInit(): void {
  }

  passCheck(c: AbstractControl): { passwordMismatch: boolean } {

    if (c.get('password').value !== c.get('confirmPassword').value) 
    {
        return {passwordMismatch: true};
    }

    return null;
  }

  register(){

    this.store.dispatch(new Register(this.form.value));
  }

}
