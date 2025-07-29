import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "company-logo",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./CompanyLogo.component.html",
})
export class CompanyLogo {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() alternate = false;
}
