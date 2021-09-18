import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

const token =localStorage.getItem("Token");

const routes: Routes = 
[
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetPassword',component:ForgotPasswordComponent},
  {path:`resetpassword/${token}`,component:ResetPasswordComponent},
  {path:'home',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
