import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLocalUrl } from 'src/utils';
import { AuthHandler, AuthType, UserInfo } from '../app-types';
import { TokenInfo } from './auth-oauth-handler';

const KEY_USER = 'app_user';
const KEY_TOKEN = 'app_token';

@Injectable({
  providedIn: 'root',
})
export class AuthLocalHandler implements AuthHandler {
  private tokenInfo: TokenInfo;
  private userInfo: UserInfo;

  private getUserInfoSubject$ = new BehaviorSubject<UserInfo>(null);
  public getUserInfo$ = this.getUserInfoSubject$.asObservable();

  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private isDoneAuthSubject$ = new ReplaySubject<boolean>();
  public isDoneAuth$ = this.isDoneAuthSubject$.asObservable();

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem(KEY_TOKEN) && sessionStorage.getItem(KEY_USER)) {
      this.tokenInfo = JSON.parse(sessionStorage.getItem(KEY_TOKEN));
      this.userInfo = JSON.parse(sessionStorage.getItem(KEY_USER));
    }
  }

  init(): void {}

  getAuthType(): AuthType {
    return AuthType.Local;
  }

  getTokenInfo(): Promise<TokenInfo> {
    return Promise.resolve(this.tokenInfo);
  }

  login(
    targetUrl: string,
    username: string,
    password: string
  ): Promise<UserInfo> {
    // TODO: call your login url with provided username and password
    return this.http
      .get(getLocalUrl(`/assets/user.json`))
      .pipe(
        map((response) => {
          // TODO: convert to UserInfo from backend response
          this.userInfo = (username
            ? {
                ...response,
                ...{ name: username, accessToken: password },
              }
            : response) as UserInfo;
          this.tokenInfo = {
            accessToken: password,
          };
          sessionStorage.setItem(KEY_TOKEN, JSON.stringify(this.tokenInfo));
          sessionStorage.setItem(KEY_USER, JSON.stringify(this.userInfo));
          this.isAuthenticatedSubject$.next(true);
          this.isDoneAuthSubject$.next(true);
          this.getUserInfoSubject$.next(this.userInfo);
          return this.userInfo;
        })
      )
      .toPromise();
  }

  logout(): void | Promise<void> {
    // TODO: use corrent url to log out
    this.userInfo = null;
    this.tokenInfo = null;
    return this.http
      .get(getLocalUrl('/assets/user.json'))
      .pipe(
        map(() => {
          return;
        })
      )
      .toPromise();
  }
}
