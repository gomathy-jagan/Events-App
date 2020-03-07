import { EventsListComponent } from "./../events-list/events-list.component";
import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent implements OnInit {
  isdirty: Boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  cancel() {
    //console.log(this.router);
    this.router.navigate(["/events"]);
  }
}
