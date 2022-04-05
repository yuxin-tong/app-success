import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { RoutingConstants } from '../constants/routing.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route.path == RoutingConstants.AUTH) {
      // authenticated but wants to access login/forgot-password
      if (this.authService.isAuthenticated()) {
        this.router.navigate([RoutingConstants.DASHBOARD]);
        return false;
      } else {
        return true;
      }
    } else {
      console.log(route.path);
      if (!this.authService.isAuthenticated()) {
        this.router.navigate([RoutingConstants.LOGIN]);
        return false;
      } else {
        return true;
      }
    }
  }

  /*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }*/
}
