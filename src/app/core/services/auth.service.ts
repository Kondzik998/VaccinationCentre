import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user?: SocialUser;
  public refreshTokenTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    const currentUser = localStorage.getItem('currentUser') || '{}';
    this.user = JSON.parse(currentUser);

    this.socialAuthService.initState.subscribe(() => {
      if (this.loggedIn()) this.startRefreshTokenTimeout();
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.signIn(user);
    });
  }

  public loggedIn(): boolean {
    return this.user !== undefined;
  }

  public login(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public logout(signOut = true): void {
    this.stopRefreshTokenTimeout();
    this.user = undefined;

    localStorage.removeItem('currentUser');

    if (signOut) this.socialAuthService.signOut();

    this.router.navigate(['/auth']);
  }

  public refreshToken(): void {
    this.socialAuthService
      .refreshAuthToken(GoogleLoginProvider.PROVIDER_ID)
      .catch(() => this.logout(false));
  }

  private signIn(user: SocialUser): void {
    const loggedIn = this.loggedIn();

    this.user = user;
    this.startRefreshTokenTimeout();

    localStorage.setItem('currentUser', JSON.stringify(this.user));

    if (!loggedIn) this.router.navigate(['/']);
  }

  private startRefreshTokenTimeout(): void {
    const expires = new Date(this.user?.response?.expires_at);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;

    if (timeout >= 0)
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken(), timeout);
    else this.logout(false);
  }

  private stopRefreshTokenTimeout(): void {
    if (this.refreshTokenTimeout) clearTimeout(this.refreshTokenTimeout);
  }
}
