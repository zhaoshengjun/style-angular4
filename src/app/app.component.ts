import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  borderStyle = {
    border: "1px solid black",
    "border-radius": "3px",
    width: "200px",
    "padding.px": 15
  };

  updateStyle(width) {
    this.borderStyle.width = width + "px";
  }
  updatePadding(padding) {
    this.borderStyle["padding.px"] = padding;
  }
}
