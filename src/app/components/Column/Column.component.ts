import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "column",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Column.component.html",
})
export class Column {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() book: string = "";
  @Input() heading: string = "";
  @Input() text: string = "";
}
