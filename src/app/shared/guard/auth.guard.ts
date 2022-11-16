import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class AuthGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return new Observable<boolean>((observer) => {
      const user = this.userService.user.getValue();
      const hasRole: boolean = !!(user.userEntityRoles == 'ROLE_ADMIN' || 'ROLE_CLIENT');
      if (hasRole) {
        observer.next(true);
        observer.complete();
      } else {
        observer.next(false);
        observer.complete();
      }
    });
  }
}
