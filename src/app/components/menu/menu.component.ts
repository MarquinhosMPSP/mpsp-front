import { Component, OnInit, AfterViewInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
// import * as Feather from "feather-icons";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  user: string;

  constructor(private loginService: LoginService) {
    this.loginService.user.subscribe(
      data =>
        // this.user = data || sessionStorage.getItem('user'))
        (this.user = this.loginService.getUser())
    );
  }

  ngOnInit() {}

  logout() {
    this.loginService.logout();
  }
}
