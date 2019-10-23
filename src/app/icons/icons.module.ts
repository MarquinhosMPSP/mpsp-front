import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import {
  Menu,
  Eye,
  Download,
  List,
  PlusCircle,
  Calendar,
  X,
  Check
} from "angular-feather/icons";

const icons = { Menu, Eye, Download, List, PlusCircle, Calendar, X, Check };

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
