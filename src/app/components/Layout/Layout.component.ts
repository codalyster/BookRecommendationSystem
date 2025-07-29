import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Column } from "../Column/Column.component";
import { Button } from "../Button/Button.component";
@Component({
  selector: "layout",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Column, Button],
  templateUrl: "./Layout.component.html",
})
export class Layout {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
