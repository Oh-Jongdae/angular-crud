import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ButtonModule} from "primeng/button";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    PasswordModule,
    FormsModule,
    AutoCompleteModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
