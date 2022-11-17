import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ButtonModule} from "primeng/button";
import {TableModule} from 'primeng/table';
import {ToolbarModule} from "primeng/toolbar";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {UserComponent} from "./user/user.component";
import {UserComponentForm} from "./user/user-form.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserComponentForm
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
    ButtonModule,
    TableModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
