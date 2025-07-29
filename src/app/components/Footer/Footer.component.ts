import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { CompanyLogo } from "../CompanyLogo/CompanyLogo.component";
@Component({
  selector: "footer-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CompanyLogo],
  templateUrl: "./Footer.component.html",
})
export class Footer {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
