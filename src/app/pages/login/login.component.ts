import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loading = false;
  form: FormGroup;
  error: null;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private loader: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      cpf: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get formValues() {
    return this.form.controls;
  }

  async login() {
    this.loading = true;
    this.loader.show();
    this.loginService
      .login({
        cpf: this.formValues.cpf.value,
        senha: this.formValues.password.value
      })
      .subscribe({
        next: response => {
          this.error = null;
          this.loginService.setUser(response);
          sessionStorage.setItem("isLogged", "true");
          this.router.navigate(["consulta"]);
          this.loader.hide();
          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.error = err.error.message;
          this.loader.hide();
          this.loading = false;
        }
      });
  }
}
