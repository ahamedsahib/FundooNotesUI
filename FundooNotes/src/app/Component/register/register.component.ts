import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm !: FormGroup;

  // variable - default false
  hide: boolean = false;

  isVisible:boolean= true;

  constructor() { }

    ngOnInit(): void {
      this.RegisterForm = new FormGroup({
        firstName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
        lastName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
        email: new FormControl('',[Validators.required, Validators.email]),
        password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$'),Validators.minLength(8)]),
        confirmPassword:new FormControl('',[Validators.required])
      });
    }
    ShowPassword() {
      this.hide = !this.hide;
  }

  getErrorMessage(inputName:any)
   {
      let len = inputName=="password"? 8:3;
        if (this.RegisterForm.controls[`${inputName}`].hasError('required')) {
          return 'You must enter a value';
        }
        else if(this.RegisterForm.controls[`${inputName}`].hasError('minlength')){
          return `minimum ${len} characters`;
        }
              else if(this.RegisterForm.controls[`${inputName}`].hasError('email'))
        {
          return `${inputName} is invalid`;
        }
        return this.RegisterForm.controls[`${inputName}`].hasError('pattern') ? `${inputName} is invalid` : '';
    }
}