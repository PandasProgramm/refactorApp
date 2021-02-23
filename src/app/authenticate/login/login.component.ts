import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpApiService} from '../../topics/services/http-api.service';
import {User} from '../../models/users/User';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:User;
  constructor(private httpService:HttpApiService) { }
    loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null,Validators.required),
  })
  ngOnInit(): void {
  }

}
