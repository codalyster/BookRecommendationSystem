import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Button } from "../Button/Button.component";
@Component({
  selector: "cta",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Button],
  templateUrl: "./CTA.component.html",
})
export class CTA {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
