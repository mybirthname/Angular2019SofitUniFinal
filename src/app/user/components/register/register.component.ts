import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading:boolean;

  form:FormGroup;
  constructor(private fb:FormBuilder, 
              private userService:UserService, 
              private router:Router,
              private toastrService:ToastrService)  { 

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


  }


  passCheck(c: AbstractControl): { passwordMismatch: boolean } {

    if (c.get('password').value !== c.get('confirmPassword').value) 
    {
        return {passwordMismatch: true};
    }

    return null;
  }

  register(){
    this.loading=true;
    this.userService.create(this.form.value).subscribe((data)=>{

      this.loading = false;
      this.toastrService.success('User is created')
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
   
  }

}
