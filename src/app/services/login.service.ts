import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  }

  logout() {
    sessionStorage.removeItem('isLogged');
    sessionStorage.removeItem('user');
    location.reload()
    this.user.next(null)
  }

  isLoggedIn = () => sessionStorage.getItem('isLogged') != null

  setUser = ({ nome }: any) => {
    sessionStorage.setItem('user', nome);
    this.user.next(nome);
  }

}
