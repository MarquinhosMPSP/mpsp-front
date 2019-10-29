import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { environment } from "src/environments/environment";
import { TemplatePDF, TemplateStyle } from "src/app/templates/template";

@Component({
  selector: "app-relatorio",
  templateUrl: "./relatorio.component.html",
  styleUrls: ["./relatorio.component.scss"]
})
export class RelatorioComponent implements OnInit {
  @Input("report") report: any;
  @ViewChild("reportContent", { static: false }) reportEl: ElementRef;
  @ViewChild("arisp", { static: false }) arispEl: ElementRef;
  @ViewChild("arpenp", { static: false }) arpenpEl: ElementRef;
  @ViewChild("cadesp", { static: false }) cadespEl: ElementRef;
  @ViewChild("caged", { static: false }) cagedEl: ElementRef;
  @ViewChild("censec", { static: false }) censecEl: ElementRef;
  @ViewChild("detran", { static: false }) detranEl: ElementRef;
  @ViewChild("infocrim", { static: false }) infocrimEl: ElementRef;
  @ViewChild("jucesp", { static: false }) jucespEl: ElementRef;
  @ViewChild("siel", { static: false }) sielEl: ElementRef;
  @ViewChild("sivec", { static: false }) sivecEl: ElementRef;

  pathBase: string = environment.api;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  export() {
    let pdf = window.open("", "", "height=700,width=700");
    pdf.document.write("<html><head>");
    pdf.document.write("<title>Empregados</title>");
    pdf.document.write(TemplateStyle);
    pdf.document.write("</head>");
    pdf.document.write("<body>");
    pdf.document.write(TemplatePDF(this.report, this.pathBase));
    pdf.document.write("</body></html>");
    pdf.document.close();
    setTimeout(() => {
      pdf.print();
    }, 1000);

    // let opt = {
    //   margin: 1,
    //   filename: "teste.pdf",
    //   image: { type: "jpeg", quality: 1 },
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    // };
    // html2pdf()
    //   .from(this.reportEl.nativeElement)
    //   .set(opt)
    //   .save();
  }
}
