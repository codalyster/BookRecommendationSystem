import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "placeholder-logo",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./PlaceholderLogo.component.html",
})
export class PlaceholderLogo {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() logo1: string = "";
  /** Variant props */
  @Input() alternate = false;
  @Input() logo = 1;
  /** Style props */
  @Input() placeholderLogoWidth: string | number = "";
  @Input() placeholderLogoHeight: string | number = "";
  @Input() logoIconTop: string | number = "";
  @Input() logoIconLeft: string | number = "";
  @Input() logoIconWidth: string | number = "";
  @Input() logoIconHeight: string | number = "";

  get placeholderLogoStyle() {
    return {
      width: this.placeholderLogoWidth,
      height: this.placeholderLogoHeight,
    };
  }

  get logoIconStyle() {
    return {
      top: this.logoIconTop,
      left: this.logoIconLeft,
      width: this.logoIconWidth,
      height: this.logoIconHeight,
    };
  }
}
