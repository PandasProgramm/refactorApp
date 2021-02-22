import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReviewComponent } from './topics/review/review.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ReviewComponent,
        PageNotFoundComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }
