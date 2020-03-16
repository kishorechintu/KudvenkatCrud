import { Component } from "@angular/core";

@Component({
  selector: "app-switchdemo",
  templateUrl: "./switchdemo.component.html",
  styleUrls: ["./switchdemo.component.css"]
})
export class SwitchdemoComponent {
  public switchView;
  public index = 0;
  public views = ["info", "summary", "preview"];
  public prevbtn;
  public nextbtn;
  public product = {
    Name: "Samsung Tv",
    Price: 344432.53,
    Photo: "assets/tv.jpg",
    mfd: new Date()
  };
  public showView(value) {
    this.switchView = value;
  }
  public previous() {
    if (this.index !== 0) {
      this.index--;
    }

    this.switchView = this.views[this.index];
    console.log(this.index);
  }
  public next() {
    if (this.index! < this.views.length - 1) {
      this.index++;
    }

    this.switchView = this.views[this.index];
    console.log(this.index);
  }
}
