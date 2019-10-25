import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoricoComponent } from "./historico.component";
import { IconsModule } from "src/app/icons/icons.module";
import { PipesModule } from "src/app/pipes/pipes.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HistoricoComponent],
  imports: [CommonModule, IconsModule, PipesModule, FormsModule],
  exports: [HistoricoComponent]
})
export class HistoricoModule {}
