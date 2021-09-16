import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm !: FormGroup;

  // variable - default false
  hide: boolean = true;

  isVisible:boolean= true;

  constructor(
    private userService:UserServiceService,
     private snackBar:MatSnackBar ,private router:Router
     ) {}

    ngOnInit(): void {
      this.RegisterForm = new FormGroup({
        firstName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
        lastName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
        email: new FormControl('',[Validators.required, Validators.email]),
        password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
        confirmPassword:new FormControl('',[Validators.required])
      });
    }
    
    onSubmit() {
      if (this.RegisterForm.valid) {
        this.Register();
      }
    }
    ShowPassword()
    {
       this.hide = !this.hide;
    }

    getErrorMessage(inputName:string)
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

    Register(){
        this.userService.Register(this.RegisterForm.value).
        subscribe((status:any)=>
        {
          this.snackBar.open(`${status.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', 
          horizontalPosition: 'left' })
          if(`${status.status == true}`)
            this.router.navigate(['/login']);
        },
        error => {
          this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', 
          horizontalPosition: 'left' })
      });
    }
}