import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { environment } from "src/environments/environment";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: "app-relatorio",
  templateUrl: "./relatorio.component.html",
  styleUrls: ["./relatorio.component.scss"]
})
export class RelatorioComponent implements OnInit {
  @Input("report") report: any;
  @ViewChild("reportContent", { static: false }) reportEl: ElementRef;
  pathBase: string = environment.api;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  export() {
    this.renderer.removeClass(this.reportEl.nativeElement, "body");

    html2canvas(this.reportEl.nativeElement, { allowTaint: true }).then(
      function(canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;
        var doc = new jsPDF("p", "mm");
        var position = 0;

        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        doc.save("file.pdf");
      }
    );
    this.renderer.addClass(this.reportEl.nativeElement, "body");
  }
}
