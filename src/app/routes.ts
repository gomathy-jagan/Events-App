//import { ProfileComponent } from "./user/profile/profile.component";
import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { Error404Component } from "./errors/error404/error404.component";
import { EventRouteActivator } from "./event-details/event-route-activator.service";
import { EventsListResolverService } from "./service/events-list-resolver-service.service";

export const appRoutes: Routes = [
  { path: "user", loadChildren: "src/app/user/user.module#UserModule" },

  { path: "404", component: Error404Component },
  // { path: "events/new", component: CreateEventComponent },
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventsListResolverService }
  },
  //path: "events", component: EventsListComponent },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  //{ path: "events/:id", component: EventDetailsComponent }, //events/1 or //events/foo
  { path: "", redirectTo: "/events", pathMatch: "full" } // default path where pathMatch can accept prefix or full
];
