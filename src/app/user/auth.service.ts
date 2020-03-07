import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    console.log(userName);
    this.currentUser = {
      id: 1,
      firstName: "Devaiah",
      lastName: "Ramesh",
      userName: userName
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
}
