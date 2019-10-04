import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReportService } from '../services/report.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  report: any;
  history: any;
  @ViewChild('reportContent', { static: false }) reportContent: ElementRef;

  constructor(private reportService: ReportService, private toastr: ToastrService, private loginService: LoginService) { }

  user: any;

  ngOnInit() {
    this.user = this.loginService.getUser()
    this.generateReport('last')
    this.generateHistory()
  }

  changeView(id) {
    this.report = this.generateReport('getOne', id)
  }

  generateReport(operation: string, report_id = 1) {
    this.reportService.generateReport(this.user, operation, report_id)
      .subscribe({
        next: (data) => {
          this.report = this.transformReport(data)
          if (operation !== 'last') {
            this.toastr.success('Relatório gerado com sucesso!')
            this.generateHistory()
          }
        },
        error: (err) => this.toastr.error(err.error.message || 'Ocorreu um erro ao gerar relatório')
      });
  }

  generateHistory() {
    this.reportService.generateHistory(this.user)
      .subscribe({
        next: (data) => {
          this.history = this.transformHistory(data)
        },
        error: (err) => this.toastr.error(err.error.message || 'Ocorreu um erro ao buscar histórico')
      })
  }

  export() {
    let pdf = new jsPDF();
    let counter = 0
    pdf.setFontSize(10)
    this.report.fields.forEach(element => {
      pdf.setFontStyle('bold')
      pdf.text(`${element.name}:`, 10, counter)
      pdf.setFontStyle('normal')
      pdf.text(`${element.content}:`, 55, counter)
      counter += 10
    });
    pdf.output('dataurlnewwindow')
  }

  transformReport(data) {
    let dataArray = Object.entries(data).filter(item => !item[0].match('_id'))
    let withoutPath = dataArray.filter(item => !item[0].match(/path/i) || !item[0].match(/__v/))
    let fields = withoutPath.map(i => ({ name: i[0], content: i[1] }))
    return { _id: data['_id'], fields, imgs: dataArray.filter(item => item[0].match(/pathimg/i)), pdfs: dataArray.filter(item => item[0].match(/pathpdf/i)) }
  }

  transformHistory = (data) => data.map((obj) => {
    let dataArray = Object.entries(obj).filter(item => !item[0].match('_id'))
    let [headers, fields] = [dataArray.map(i => i[0]), dataArray.map(i => i[1])]
    return { _id: obj['_id'], headers, fields }
  })

}
