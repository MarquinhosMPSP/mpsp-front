import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import {
  Search,
  Plus,
  Check,
  X,
  Eye,
  Menu,
  Download
} from "angular-feather/icons";

const icons = { Search, Plus, Check, X, Eye, Menu, Download };

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
