import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {AuthService} from "./shared/services/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "./shared/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-crud';

  username: string = '';
  password: string = '';

  constructor(private primengConfig: PrimeNGConfig, public authService: AuthService, public userService: UserService) {
  }

  ngOnInit() {

    this.primengConfig.ripple = true;
  }

  authenticateUser() {
    this.authService.authenticate(this.username, this.password);
  }
}
