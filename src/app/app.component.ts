import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: any;

  constructor(private loginService: LoginService) {
    this.loginService.user.subscribe((data) => 
      this.user = data || sessionStorage.getItem('user'))
  }

  logout() {
    this.loginService.logout();
  }

}
