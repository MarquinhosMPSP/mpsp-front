import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private cpf: string = ''
  private password: string = ''

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  async login() {
    let response = await this.loginService.login({cpf: this.cpf, senha: this.password})
    if(response) {
      console.log(response);
      
      this.loginService.setUser(response)
      this.router.navigate(['consulta'])     
      sessionStorage.setItem('isLogged', 'true');
    }
  }

}
