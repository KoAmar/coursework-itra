import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {UserToken} from '../models/auth/user-token';
import {CallDialogService} from '../services/call-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private dialog: CallDialogService) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = AuthService.getSavedToken();
    if (token) {
      const tokenJSON: UserToken = AuthService.parseJwt(token);
      if (tokenJSON) {
        if (tokenJSON.activated) {
          return true;
        }
      }
    } else {
      this.dialog.showMessageBox('Looks like you are not admin.');
      return false;
    }
  }

}
