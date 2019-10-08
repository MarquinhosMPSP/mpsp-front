import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ReportService } from "../services/report.service";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../services/login.service";
import { Socket } from "ngx-socket-io";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.scss"]
})
export class ConsultaComponent implements OnInit {
  report: any;
  history: any;
  @ViewChild("reportContent", { static: false }) reportContent: ElementRef;

  constructor(
    private reportService: ReportService,
    private toastr: ToastrService,
    private loginService: LoginService,
    private socket: Socket
  ) {}

  user: any;

  ngOnInit() {
    this.socket.fromEvent("report").subscribe(data => {
      this.toastr.success("Relatório gerado com sucesso!");
      this.report = this.transformReport(data);
      this.getHistory();
    });
    this.user = this.loginService.getUser();
    this.getReport();
    this.getHistory();
  }

  changeView(id) {
    this.report = this.history.filter(item => item._id == id)[0];
  }

  generateReport() {
    this.reportService.generateReport(this.user).subscribe({
      next: ({ message }) => {
        this.toastr.info(message);
      },
      error: () => this.toastr.error("Ocorreu um erro ao gerar relatório")
    });
  }

  getReport() {
    this.reportService.getReport(this.user).subscribe({
      next: data => {
        this.report = this.transformReport(data);
      },
      error: err => {
        if (err.status === 404) this.toastr.warning("Não há relatórios");
      }
    });
  }

  getHistory() {
    this.reportService.getHistory(this.user).subscribe({
      next: data => {
        this.history = this.transformHistory(data);
      },
      error: err => {
        if (err.status === 404) this.toastr.warning("Não há histórico");
      }
    });
  }

  export() {
    let pdf = new jsPDF();
    let counter = 0;
    pdf.setFontSize(10);
    this.report.fields.forEach(element => {
      pdf.setFontStyle("bold");
      pdf.text(`${element.name}:`, 10, counter);
      pdf.setFontStyle("normal");
      pdf.text(`${element.content}:`, 55, counter);
      counter += 10;
    });
    pdf.output("dataurlnewwindow");
  }

  transformReport(data) {
    const dataArray = Object.entries(data).filter(
      item => !item[0].match("_id")
    );
    const withoutPath = dataArray.filter(
      item => !item[0].match(/path/i) && !item[0].match(/__v/)
    );
    const fields = withoutPath.map(i => ({ name: i[0], content: i[1] }));
    return {
      _id: data["_id"],
      fields,
      imgs: dataArray.filter(item => item[0].match(/pathimg/i)),
      pdfs: dataArray.filter(item => item[0].match(/pathpdf/i))
    };
  }

  transformHistory = data =>
    data
      .map(obj => this.transformReport(obj))
      .map(item => ({ ...item, headers: item.fields.map(({ name }) => name) }));
}
