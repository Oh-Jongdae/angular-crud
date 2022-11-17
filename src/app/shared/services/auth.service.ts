import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserService} from "./user.service";
import {User} from "../model/user.interface";
import {Router} from "@angular/router";

// @ts-ignore
@Injectable({
  providedIn: "root",
})

export class AuthService {

  constructor(public httpClient: HttpClient, public userService: UserService, public router: Router) {

  }

  authenticate(username: string, password: string): void {

    let httpParams = new HttpParams()
      .append("username", username)
      .append("password", password)

    this.httpClient.post(`https://jwt-auth-springboot.herokuapp.com/sso/signing`, httpParams, {responseType: 'text'}).subscribe((bearerToken) => {
      if (bearerToken !== null || '') {
        this.httpClient.get<User>(`https://jwt-auth-springboot.herokuapp.com/sso/search/${username}`).subscribe((response) => {
          const user: User = {
            email: response.email, userEntityRoles: response.userEntityRoles[0], username: response.username
          }

          this.userService.setUserAuthenticated(user);
        })
      } else {

        throw new Error();
      }
    })
  }

}
