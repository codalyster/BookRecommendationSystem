import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "slider-arrow",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./SliderArrow.component.html",
})
export class SliderArrow {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() arrowBack: string = "";
  /** Variant props */
  @Input() direction = "Left";
}
