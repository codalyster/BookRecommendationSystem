import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Accordion } from "../Accordion/Accordion.component";
import { Button } from "../Button/Button.component";
@Component({
  selector: "faq",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Accordion, Button],
  templateUrl: "./FAQ.component.html",
})
export class FAQ {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
