import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {authenticate} from './authenticateRoutes';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    authenticate,
    ReactiveFormsModule
  ]
})
export class AuthenticateModule { }
