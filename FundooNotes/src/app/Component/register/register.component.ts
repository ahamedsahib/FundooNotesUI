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
  constructor() { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'),Validators.minLength(3)])
    })
  }
  password() {
    this.hide = !this.hide;
}

}

