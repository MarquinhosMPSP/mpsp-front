import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-relatorio",
  templateUrl: "./relatorio.component.html",
  styleUrls: ["./relatorio.component.scss"]
})
export class RelatorioComponent implements OnInit {
  @Input("report") report: any;
  @Output() export = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
