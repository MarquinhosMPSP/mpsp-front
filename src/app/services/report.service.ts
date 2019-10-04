import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.api

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  generateReport = (user, operation, report_id) => this.http.get(`${URL}/consultar/${user}/${operation}/${report_id}`)
  
  generateHistory = (user) => this.http.get(`${URL}/historico/${user}`)
  
}