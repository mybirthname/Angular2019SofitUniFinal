import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../dto/IUser';
import { getUserListColl, getUserLoading } from 'src/app/+store';
import { UserEdit } from 'src/app/+store/user/actions';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  form:FormGroup;
  loading$:Observable<boolean>;
  id:string;
  sb:Subscription;
  user:IUser;

  constructor(private formBuidler:FormBuilder,private store:Store<any>, private activatedRoute: ActivatedRoute ) {

    this.id = activatedRoute.snapshot.params["id"];

    this.form = this.formBuidler.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      username:['',[Validators.required]],
      address: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });


    this.loading$ = store.select(getUserLoading);

   }

  ngOnInit() {
    this.formInit();
  
  }

  formInit(){
    if(this.id == null)
      return;

      this.sb = this.store.select(getUserListColl).subscribe(userList=>{
        this.user = userList.filter(user=> user._id == this.id)[0];

        const userNameControl = this.form.get('username');
        const emailControl = this.form.get('email'); 

        this.form.get('firstName').setValue(this.user.firstName);
        this.form.get('lastName').setValue(this.user.lastName);
        userNameControl.setValue(this.user.username);
        userNameControl.disable();
        this.form.get('address').setValue(this.user.address);
        this.form.get('birthDate').setValue(this.user.birthDate);
        emailControl.setValue(this.user.email);
        emailControl.disable();

      });
  }

  ngOnDestroy(): void {
    this.sb.unsubscribe();
  }

  edit(){
    this.store.dispatch(new UserEdit({id:this.id, entity:this.form.value}))
  }

}
