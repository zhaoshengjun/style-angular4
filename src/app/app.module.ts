import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { ChildComponent } from "./child.component";
import { StyledDirective } from "./styled.directive";

@NgModule({
  declarations: [AppComponent, ChildComponent, StyledDirective],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
