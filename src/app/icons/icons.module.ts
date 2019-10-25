import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import * as Feather from "angular-feather/icons";

const icons = { ...Feather };

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
