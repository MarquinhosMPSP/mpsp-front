import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsultaModule } from "./consulta/consulta.module";
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ConsultaModule, LoginModule],
  exports: [ConsultaModule, LoginModule]
})
export class PagesModule {}
