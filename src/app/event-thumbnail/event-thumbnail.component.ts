import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  //@Output() eventClick = new EventEmitter();
  constructor() {}
  // handleClickChild() {
  //   //this.eventClick.emit();
  //   this.eventClick.emit(this.event.name);
  //   console.log("button clicked");
  // }
  logParentCall() {
    console.log("Parent used template reference variable");
  }
  // someProperty: any = "child component";
  ngOnInit() {}
  getStartTimeClasses() {
    if (this.event && this.event.time === "8:00 am") {
      console.log("greens");
      return ["green", "bold"];
    } else {
      if (this.event && this.event.time === "12:00 pm") {
        console.log("red");
        return ["red", "bold"];
      } else if (this.event && this.event.time === "9:00 am") {
        console.log("pink");
        return ["pink", "bold"];
      }
      return "";
    }
  }
}
