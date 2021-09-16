import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotPasswordForm !: FormGroup;
  constructor( private userService:UserServiceService,
    private snackBar:MatSnackBar ,private router:Router) {}

  ngOnInit(): void {
    this.ForgotPasswordForm = new FormGroup({
      email: new FormControl('',[Validators.required,])
    });
}
onSubmit() {
  if (this.ForgotPasswordForm.valid) {
    this.forgotPassword();
  }
}
  forgotPassword(){
    this.userService.ResetMail(this.ForgotPasswordForm.value).
        subscribe((status:any)=>
        {
          console.log(status);
          this.snackBar.open(`${status.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', horizontalPosition: 'left' })
      },
        error => {
          this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', horizontalPosition: 'left' })
      });
  }

}
