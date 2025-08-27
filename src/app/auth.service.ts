import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'jwt_token';

  login(username: string, password: string): Observable<{ token?: string; error?: string }> {
    if (username === 'admin' && password === '1234') {
      const fakeToken = 'FAKE_JWT_TOKEN';
      return of({ token: fakeToken }).pipe(
        tap(res => localStorage.setItem(this.tokenKey, res.token!))
      );
    } else {
      return of({ error: 'Invalid credentials' });
    }
  }

  logout() { localStorage.removeItem(this.tokenKey); }
  getToken(): string | null { return localStorage.getItem(this.tokenKey); }
  isLoggedIn(): boolean { return !!this.getToken(); }
}
