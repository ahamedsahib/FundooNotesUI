import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm !: FormGroup;
  hide = true;
  constructor( private userService:UserServiceService,
    private snackBar:MatSnackBar ,private router:Router) {}

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('',[Validators.required,]),
      password:new FormControl('',[Validators.required])
    });
}
onSubmit() {
  if (this.LoginForm.valid) {
    this.login();
  }
}
  login(){
    this.userService.Login(this.LoginForm.value).
        subscribe((status:any)=>
        {
          console.log(status);
          this.snackBar.open(`${status.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', horizontalPosition: 'left' })
          if(`${status.status == true}`)
          this.router.navigate(['/register']);
      },
        error => {
          this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom', horizontalPosition: 'left' })
      });
  }
}
