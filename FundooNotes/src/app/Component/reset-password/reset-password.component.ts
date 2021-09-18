import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  ResetPasswordForm!:FormGroup


  constructor(private userService:UserServiceService,
    private snackBar:MatSnackBar ,private router:Router) { }

    ngOnInit(): void
    {
      this.ResetPasswordForm = new FormGroup({
        password:new FormControl('',[Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$'),Validators.minLength(8)]),
        confirmPassword:new FormControl('',[Validators.required])
        });
    }
    onSubmit() {
      if (this.ResetPasswordForm.valid) {
        this.forgotPassword();
      }
    }
    getErrorMessage(inputName:string)
    {
        if (this.ResetPasswordForm.controls[`${inputName}`].hasError('required')) {
          return 'You must enter a value';
        }
        else if(this.ResetPasswordForm.controls[`${inputName}`].hasError('minlength')){
          return `minimum 8 characters required`;
        }
        return this.ResetPasswordForm.controls[`${inputName}`].hasError('pattern') ? `${inputName} is invalid` : '';
    }

    ShowPassword()
    {
       this.hide = !this.hide;
    }
    forgotPassword(){
      this.userService.ResetPassword(this.ResetPasswordForm.value).
          subscribe((status:any)=>
          {
            console.log(status);
            this.snackBar.open(`${status.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', horizontalPosition: 'left' })
            if(`${status.status == true}`)
            this.router.navigate(['/login']);
        },
          error => {
            this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', horizontalPosition: 'left' })
        });
    }
}


