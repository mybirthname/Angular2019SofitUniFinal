import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { ILoginCredentials } from '../../dto/ILoginCredentials';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { setBindingRoot } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

 
  credentials: ILoginCredentials
  form:FormGroup;
  sb:Subscription;
  loading:boolean;
  
  constructor(private userService:UserService, 
              private fb:FormBuilder,
              private router:Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

   }

  ngOnInit() {
  }

  login(){
    this.loading = true;
    this.sb = this.userService.logIn(this.form.value).subscribe((data)=>{
      this.loading = false;
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy(): void {
    if(this.sb!=null)
      this.sb.unsubscribe();
  }
}
