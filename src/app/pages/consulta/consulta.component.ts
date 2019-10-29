import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter
} from "@angular/core";
import { ReportService } from "../../services/report.service";
import { ToastrService } from "ngx-toastr";
import { LoginService } from "../../services/login.service";
import { environment } from "src/environments/environment";
import * as io from "socket.io-client";
import * as jsPDF from "jspdf";
import { RelatorioComponent } from "src/app/components/relatorio/relatorio.component";

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.scss"]
})
export class ConsultaComponent implements OnInit {
  socket: any;
  report: any;
  history: any;

  cpf: string = null;
  rg: string = null;
  nome: string = null;
  cnpj: string = null;
  empresa: string = null;
  nrprocesso: string = null;
  pispasep: string = null;

  portaisValidados = [];

  constructor(
    private reportService: ReportService,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {
    const user = sessionStorage.getItem("user");
    this.socket = io(environment.api, { query: { user } });
  }

  user: any;

  ngOnInit() {
    this.socket.on("report", data => {
      console.log(data);
      this.toastr.success("Relatório gerado com sucesso!");
      this.report = this.transformReport(data);
      this.getHistory();
    });
    this.user = this.loginService.getUser();
    this.getReport();
    this.getHistory();
  }

  openModal = () => {
    (<any>$("#formModal")).modal("toggle");
  };

  validatePortals() {
    this.portaisValidados = Object.entries({
      Arisp: () => this.isValid(this.cpf || this.cnpj),
      Arpenp: () => this.isValid(this.nrprocesso),
      Cadesp: () => this.isValid(this.cnpj),
      Caged: () => this.isValid(this.cnpj && this.pispasep),
      Censec: () => this.isValid(this.cpf || this.cnpj),
      Detran: () => this.isValid(this.cpf || this.cnpj),
      Infocrim: () => this.isValid(this.nome),
      Jucesp: () => this.isValid(this.empresa),
      Siel: () => this.isValid(this.nome && this.nrprocesso),
      Sivec: () => this.isValid(this.rg && this.nome)
    })
      .filter(([name, val]) => {
        if (val()) return name;
      })
      .map(([name]) => name);
  }

  isValid = item => item != null && item != "";

  validateForm = () =>
    !(
      this.isValid(this.cpf || this.cnpj) ||
      this.isValid(this.nrprocesso) ||
      this.isValid(this.cnpj) ||
      this.isValid(this.cnpj && this.pispasep) ||
      this.isValid(this.cpf || this.cnpj) ||
      this.isValid(this.cpf || this.cnpj) ||
      this.isValid(this.nome) ||
      this.isValid(this.empresa) ||
      this.isValid(this.nome && this.nrprocesso) ||
      this.isValid(this.rg && this.nome)
    );

  changeView(id) {
    (<any>$("#viewModal")).modal("toggle");
    this.report = this.history.filter(item => item._id == id)[0];
  }

  generateReport() {
    (<any>$("#formModal")).modal("toggle");
    this.reportService
      .generateReport(
        this.user,
        this.cpf,
        this.rg,
        this.nome,
        this.cnpj,
        this.empresa,
        this.nrprocesso,
        this.pispasep
      )
      .subscribe({
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
  transformReport = data =>
    Object.entries(data)
      .filter(([header]) => !["__v"].includes(header))
      .reduce((sum, [head, val]) => ({ ...sum, [head]: val }), {});

  transformHistory = data =>
    data.map(item =>
      Object.entries(item)
        .filter(([header]) => !["__v"].includes(header))
        .reduce((sum, [head, val]) => ({ ...sum, [head]: val }), {})
    );
}
