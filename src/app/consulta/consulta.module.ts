import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta.component';
import { MenuModule } from '../shared/menu/menu.module';



@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
})
export class ConsultaModule { }
