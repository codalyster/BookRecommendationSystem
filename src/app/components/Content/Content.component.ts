import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { PlaceholderLogo } from "../PlaceholderLogo/PlaceholderLogo.component";
@Component({
  selector: "content",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, PlaceholderLogo],
  templateUrl: "./Content.component.html",
})
export class Content {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() showContent: boolean = false;
  @Input() placeholderImage: string = "";
  @Input() quote: string = "";
  @Input() authorName: string = "";
  @Input() authorTitle: string = "";
  @Input() alternate: boolean = false;
  @Input() logo: 2 = 2;
  @Input() placeholderLogoWidth: string = "";
  @Input() placeholderLogoHeight: string = "";
  @Input() logoIconTop: string = "";
  @Input() logoIconLeft: string = "";
  @Input() logoIconWidth: string = "";
  @Input() logoIconHeight: string = "";
  /** Style props */
  @Input() contentFlex: string | number = "";
  @Input() contentWidth: string | number = "";

  get contentStyle() {
    return {
      flex: this.contentFlex,
      width: this.contentWidth,
    };
  }
}
