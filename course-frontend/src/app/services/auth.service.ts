import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {RestResponse} from '../models/rest-responce.model';
import {LoginResponse} from '../models/auth/login-responce.model';
import {User} from '../models/user';
import {UserToken} from '../models/auth/user-token';


@Injectable({providedIn: 'root'})
export class AuthService {
  public currentUser: User;


  constructor(private httpClient: HttpClient,
              ) {
    const token = AuthService.getSavedToken();
    if (token) {
      this.setCurrentUser(token);
    }
  }

  public static parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }


  public static getSavedToken(): string {
    const token = localStorage.getItem('currentUserToken');
    if (token) {
      return token;
    }
  }

  public static saveCurrentUserToken(token: string) {
    localStorage.setItem('currentUserToken', token);
  }

  public setCurrentUser(token) {
    if (token) {
      const tokenJSON: UserToken = AuthService.parseJwt(token);
      alert(JSON.stringify(tokenJSON));
      this.currentUser = new User();
      this.currentUser.email = tokenJSON.email;
      this.currentUser.id = tokenJSON.id;
      this.currentUser.login = tokenJSON.login;
      this.currentUser.role = tokenJSON.role;
      this.currentUser.activated = tokenJSON.activated;
    }
  }

  public logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUserToken');
  }


  public register(name: string, email: string, password: string):
    Observable<RestResponse> {
    return this.httpClient.post<RestResponse>(`${environment.apiEndpoint}/user/register`,
      {login: name, email, password});
  }

  public login(email: string, password: string):
    Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${environment.apiEndpoint}/user/login`,
      {email, password});
  }
}
