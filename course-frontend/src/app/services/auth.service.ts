import {Inject, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpRequest, HttpHandler} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {RestResponse} from '../models/rest-responce.model';
import {LoginResponse} from '../models/auth/login-responce.model';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private httpClient: HttpClient,) {
  }

  public static currentUser(): string {
    const storageUser = localStorage.getItem('currentUser');
    if (storageUser) {
      return storageUser;
    } else {
      return null;
    }
  }

  public static getCurrentToken(): string {
    return localStorage.getItem('currentUserToken');
  }

  public static saveCurrentToken(token: string) {
    localStorage.setItem('currentUserToken', token);
  }

  private static handleError(error: any) {
    console.error('Error', error);
    return Observable.throw(error.message || error);
  }

  public static signOut() {
    localStorage.removeItem('currentUserToken');
  }


  public register(name: string, email: string, password: string): Observable<RestResponse> {
    return this.httpClient.post<RestResponse>(`${environment.apiEndpoint}/user/register`,
      {login: name, email, password});
  }

  public login(email: string, password: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${environment.apiEndpoint}/user/login`,
      {email, password});
  }
}
