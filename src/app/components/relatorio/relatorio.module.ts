import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatorioComponent } from "./relatorio.component";
import { IconsModule } from "src/app/icons/icons.module";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RelatorioComponent],
  imports: [CommonModule, IconsModule, PdfViewerModule, FormsModule],
  exports: [RelatorioComponent]
})
export class RelatorioModule {}
