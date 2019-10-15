import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsultaComponent } from "./consulta.component";
import { MenuModule } from "../../components/menu/menu.module";
import { HistoricoModule } from "src/app/components/historico/historico.module";
import { RelatorioModule } from "src/app/components/relatorio/relatorio.module";
import { IconsModule } from "src/app/icons/icons.module";

@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    MenuModule,
    HistoricoModule,
    RelatorioModule,
    IconsModule
  ]
})
export class ConsultaModule {}
