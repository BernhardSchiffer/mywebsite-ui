import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { UserService } from "../user-service/user.service";
import { TokenService } from "../token-service/token.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  baseUrl: string = environment.backendBaseUrl;

  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  registerNewUser(newUser: User, password: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      let body = {
        name: newUser.name,
        email: newUser.email,
        password: password
      };

      let res = await fetch(this.baseUrl + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        let user;
        let body = await res.json();
        if (body) {
          let user = body;
          this.userService.saveUser(user);
        }
        if (res.headers.get("x-auth-token")) {
          this.tokenService.saveToken("jwt", res.headers.get("x-auth-token"));
        }
        resolve(user);
      } else {
        reject(null);
      }
    });
  }
}
