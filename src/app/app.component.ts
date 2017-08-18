import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // cssClasses = "bold highlight strike";
  // cssClasses = ["bold", "highlight", "strike"];
  // cssClasses = { bold: true, highlight: true, strike: false };

  isBold = false;
  isHighlight = true;
  isStrike = true;
}
