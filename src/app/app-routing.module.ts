import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { ConsultaComponent } from "./pages/consulta/consulta.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { LoginGuardService } from "./services/login-guard.service";

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [LoginGuardService] },
  {
    path: "consulta",
    component: ConsultaComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
