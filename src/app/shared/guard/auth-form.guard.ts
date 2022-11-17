import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class AuthFormGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const user = this.userService.user.getValue();
      if (user.userEntityRoles === "ROLE_CLIENT") {
        observer.next(false);
        observer.complete();
      } else {
        observer.next(true);
        observer.complete();
      }
    })
  }
}
