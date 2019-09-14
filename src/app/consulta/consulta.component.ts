import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  type = 'Física'
  report = { nome: 'Daniel Lucas R Souza', idade: 22, cpf: '46618865859', estadoCivil: 'Solteiro' }

  constructor(private reportService: ReportService) { }

  ngOnInit() {
  }

  generateReport() {
    this.reportService.generateReport()
      .subscribe(data =>
        console.log(data)
      )
  }

}
