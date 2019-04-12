import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck {


  form:FormGroup;
  constructor(private fb:FormBuilder)  { 

    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {validators:this.passCheck})
    });


  }

  ngDoCheck(): void {
    
  }

  passCheck(c: AbstractControl): { passwordMismatch: boolean } {

    if (c.get('password').value !== c.get('confirmPassword').value) 
    {
        return {passwordMismatch: true};
    }

    return null;
  }

  ngOnInit() {
   
  }

}
