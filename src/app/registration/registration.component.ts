import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SelectTopicService} from '../topics/services/select-topic.service';
import {User} from '../models/users/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registerForm: FormGroup;
  constructor(public fb: FormBuilder, private http: SelectTopicService) {
    this.createRegisterForm();
  }
  ngOnInit() {}
  register(rf: FormGroup) {
   const user:User= rf.value;
   alert(user.email)
    this.http.addUser(user).subscribe(data=>console.log(data),error => console.log("data nooott"))

  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        passwordVerify: ['', [Validators.required]]
      },
      {
        validator: this.passwordMatch // your validation method
      })
  }
  passwordMatch(AC: AbstractControl) {
    if (AC.get('password').value != AC.get('passwordVerify').value) {
      AC.get('passwordVerify').setErrors({ MatchPassword: true });
      return true;
    } else {
      return null;
    }
  }
}