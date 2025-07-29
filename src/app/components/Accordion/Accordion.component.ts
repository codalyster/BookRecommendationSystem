import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "accordion",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Accordion.component.html",
})
export class Accordion {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() question: string = "";
  @Input() text: string = "";
}
