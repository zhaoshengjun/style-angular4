import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({ selector: "[styled]" })
export class StyledDirective {
  constructor(private el: ElementRef, private render: Renderer2) {
    // el.nativeElement.style.backgroundColor = "green";
    render.setStyle(el.nativeElement, "background-color", "yellowgreen");
  }
}
