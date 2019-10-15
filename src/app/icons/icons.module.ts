import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import { Menu, Eye, Download, List, PlusCircle } from "angular-feather/icons";

const icons = { Menu, Eye, Download, List, PlusCircle };

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
