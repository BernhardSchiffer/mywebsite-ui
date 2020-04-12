import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { UserService } from "../user-service/user.service";
import { TokenService } from "../token-service/token.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl: string = environment.backendBaseUrl;

  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  authenticated(): boolean {
    if (this.tokenService.getToken("jwt")) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }

  logout() {
    this.tokenService.deleteToken("jwt");
    this.userService.deleteUser();
  }

  async login(username: string, password: string): Promise<User> {
    let credentials = {
      email: username,
      password: password
    };

    return new Promise(async (resolve, reject) => {
      let user: User;

      let res = await fetch(this.baseUrl + "/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });
      if (res.ok) {
        if (res.headers.get("x-auth-token")) {
          this.tokenService.saveToken("jwt", res.headers.get("x-auth-token"));
        }
        let body = await res.json();
        if (body) {
          user = body;
          this.userService.saveUser(user);
        }
        resolve(user);
      } else {
        reject(null);
      }
    });
  }
}
