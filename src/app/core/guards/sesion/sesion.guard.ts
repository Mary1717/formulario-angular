import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../../services/security/security.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
  
  constructor(private securityService: SecurityService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(!this.securityService.sesionExist()){
      return true;
    }
    this.router.navigateByUrl('/dashboard/form');
    return false;
  }
  
}
