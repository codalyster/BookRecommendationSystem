import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Content } from "../Content/Content.component";
import { SliderArrow } from "../SliderArrow/SliderArrow.component";
@Component({
  selector: "testimonial",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Content, SliderArrow],
  templateUrl: "./Testimonial.component.html",
})
export class Testimonial {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
