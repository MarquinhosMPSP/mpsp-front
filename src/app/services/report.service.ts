import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

const URL = environment.api;

@Injectable({
  providedIn: "root"
})
export class ReportService {
  constructor(private http: HttpClient) {}

  // generateReport: any = user => this.http.get(`${URL}/gerar/${user}`);
  generateReport: any = (
    usuario,
    cpf,
    rg,
    nome,
    cnpj,
    empresa,
    nrprocesso,
    pispasep
  ) =>
    this.http.post(`${URL}/gerar`, {
      usuario,
      cpf,
      rg,
      nome,
      cnpj,
      empresa,
      nrprocesso,
      pispasep
    });

  getReport: any = user => this.http.get(`${URL}/consultar/${user}`);

  getHistory: any = user => this.http.get(`${URL}/historico/${user}`);
}
