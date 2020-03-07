import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile/profile.component";
import { userRoutes } from "./user.route";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  providers: []
})
export class UserModule {}
