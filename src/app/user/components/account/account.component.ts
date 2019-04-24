import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { getUserLoading, getCurrentUserColllection, IAppState } from 'src/app/+store';
import { IUser } from '../../dto/IUser';
import { Subscription, Observable } from 'rxjs';
import { UserAccount, UserEdit } from 'src/app/+store/user/actions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  form:FormGroup;
  loading$:Observable<boolean>;
  id:string;
  sb:Subscription;
  user:IUser;


  constructor(private formBuidler:FormBuilder,private store:Store<IAppState>, private activatedRoute: ActivatedRoute ) {

    this.id = activatedRoute.snapshot.params["id"];

    this.store.dispatch(new UserAccount({id:this.id}));
    this.loading$ = store.select(getUserLoading);

   }


  ngOnInit() {

    this.store.select(getCurrentUserColllection).subscribe(user=>{
      if(user != null){
        this.form = this.formBuidler.group({
          firstName: [user.firstName, [Validators.required, Validators.minLength(6)]],
          lastName: [user.lastName, [Validators.required, Validators.minLength(6)]],
          username:[user.username,[Validators.required]],
          address: [user.address, [Validators.required]],
          birthDate: [user.birthDate, [Validators.required]],
          email: [user.email, [Validators.required, Validators.email]]
        });
      }


    })
  }

  
  edit(){
    this.store.dispatch(new UserEdit({id:this.id, entity:this.form.value}))
  }

}
