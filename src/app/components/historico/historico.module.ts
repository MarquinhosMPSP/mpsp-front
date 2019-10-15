import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoricoComponent } from "./historico.component";
import { IconsModule } from "src/app/icons/icons.module";

@NgModule({
  declarations: [HistoricoComponent],
  imports: [CommonModule, IconsModule],
  exports: [HistoricoComponent]
})
export class HistoricoModule {}
