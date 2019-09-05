import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { errorHandle } from '../utility/utility'
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const URL = environment.api

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<any>('')
  }

  login(loginData) {
    return this.http.post(URL + 'autenticar', loginData)
      .pipe(
        catchError(errorHandle)
      ).toPromise();
  }

  logout() {
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('user');
    location.reload()
    this.user.next('')
  }

  isLoggedIn = () => sessionStorage.getItem('isLogged') != null

  setUser = (data) => {
    sessionStorage.setItem('user', data);
    this.user.next(data);
  }

}
