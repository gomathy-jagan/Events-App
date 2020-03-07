import { UserModule } from "./user/user.module";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { Error404Component } from "./errors/error404/error404.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventNavComponent } from "./event-nav/event-nav.component";
import { EventThumbnailComponent } from "./event-thumbnail/event-thumbnail.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { appRoutes } from "./routes";
import { EventService } from "./service/event.service";
import { EventRouteActivator } from "./event-details/event-route-activator.service";
import { EventsListResolverService } from "./service/events-list-resolver-service.service";
import { AuthService } from "./user/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventNavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  //providers: [EventService, EventRouteActivator],
  providers: [
    EventService,
    AuthService,
    EventsListResolverService,
    EventRouteActivator,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
function checkDirtyState(component: CreateEventComponent) {
  if (component.isdirty)
    return window.confirm(
      "You have not saved the data. Do you really want to cancel?"
    );
  return true;
}
