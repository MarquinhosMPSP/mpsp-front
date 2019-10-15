import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { AvatarModule } from "ngx-avatar";
import { IconsModule } from "src/app/icons/icons.module";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, AvatarModule, IconsModule],
  exports: [MenuComponent]
})
export class MenuModule {}
