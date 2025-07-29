import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { CompanyLogo } from "../CompanyLogo/CompanyLogo.component";
import { Button } from "../Button/Button.component";
@Component({
  selector: "navbar",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CompanyLogo, Button],
  templateUrl: "./Navbar.component.html",
})
export class Navbar {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
