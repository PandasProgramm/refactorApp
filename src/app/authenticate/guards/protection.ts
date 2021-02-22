import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpApiService} from '../../topics/services/http-api.service';


export class Protection_Guard implements CanActivate{

  //TODO: backend
  constructor(
    private httpService:HttpApiService,
    private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |
    UrlTree {
    return this.httpService.isAuthenticated()?true:this.router.parseUrl("/login");
  }
}
