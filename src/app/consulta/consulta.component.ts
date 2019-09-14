import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  type = 'Física'
  report = { nome: 'Daniel Lucas R Souza', idade: 22, cpf: '46618865859', estadoCivil: 'Solteiro' }

  constructor(private reportService: ReportService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  generateReport() {
    this.reportService.generateReport()
      .subscribe({
        next: () => this.toastr.success('Relatório gerado com sucesso!'),
        error: (err) => this.toastr.error(err.error.message)
      });
  }

}
