import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {}

  getStyle() {
    const gravatarUrl =
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";
    let style = `background-image:url(${gravatarUrl});width: 150px; height: 150px; border: 1px solid black`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
    // return style;
  }
}
