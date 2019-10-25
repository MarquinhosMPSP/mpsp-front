import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-historico",
  templateUrl: "./historico.component.html",
  styleUrls: ["./historico.component.scss"]
})
export class HistoricoComponent {
  @Input("history") history: any;
  @Output() changeView = new EventEmitter();
  @Output() modalOpen = new EventEmitter();

  search: string = "";

  constructor() {}

  showTooltip = event => {
    (<any>$(event.target.children[0])).tooltip();
  };
}
