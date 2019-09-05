import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private router: Router, private loginService: LoginService) { }

  canActivate() {
    const logged = this.loginService.isLoggedIn()
    if(!logged) this.router.navigate([''])
    return logged
  }

}
