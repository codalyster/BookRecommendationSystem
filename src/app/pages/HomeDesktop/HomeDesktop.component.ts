import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Navbar } from "../../components/Navbar/Navbar.component";
import { Button } from "../../components/Button/Button.component";
import { Layout } from "../../components/Layout/Layout.component";
import { Testimonial } from "../../components/Testimonial/Testimonial.component";
import { CTA } from "../../components/CTA/CTA.component";
import { FAQ } from "../../components/FAQ/FAQ.component";
import { Footer } from "../../components/Footer/Footer.component";
@Component({
  selector: "home-desktop",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Navbar, Button, Layout, Testimonial, CTA, FAQ, Footer],
  templateUrl: "./HomeDesktop.component.html",
})
export class HomeDesktop {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
