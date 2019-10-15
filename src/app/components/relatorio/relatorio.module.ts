import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatorioComponent } from "./relatorio.component";
import { IconsModule } from "src/app/icons/icons.module";

@NgModule({
  declarations: [RelatorioComponent],
  imports: [CommonModule, IconsModule],
  exports: [RelatorioComponent]
})
export class RelatorioModule {}
