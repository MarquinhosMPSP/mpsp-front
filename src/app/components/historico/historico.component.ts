import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-historico",
  templateUrl: "./historico.component.html",
  styleUrls: ["./historico.component.scss"]
})
export class HistoricoComponent {
  @Input("history") history: any;
  @Output() changeView = new EventEmitter();

  constructor() {}
}
