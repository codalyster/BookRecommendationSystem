import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "button-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Button.component.html",
})
export class Button {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() button: string = "";
  /** Variant props */
  @Input() alternate = false;
  @Input() iconPosition = "No icon";
  @Input() small = false;
  @Input() style = "Primary";
}
