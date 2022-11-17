import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-user',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponentForm implements OnInit {

  username: string = '';
  password: string = '';
  email: string = '';

  constructor(public httpClient: HttpClient, public router: Router) {
  }

  ngOnInit(): void {
  }

  saveUser() {

    const user: any = {
      username: this.username,
      password: this.password,
      email: this.email
    }

    this.httpClient.post('https://backend-crud1.herokuapp.com/api/users', user).subscribe(() => {
      this.router.navigateByUrl('records');
    });
  }
}
