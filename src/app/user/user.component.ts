import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(public router: Router, public userService: UserService, public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(`https://backend-crud1.herokuapp.com/api/users`).subscribe((response: any) => {
      this.users = response;
    })
  }

  openNew() {
    this.router.navigateByUrl('records/new')
  }
}
