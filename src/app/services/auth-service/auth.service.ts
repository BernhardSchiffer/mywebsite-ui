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
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.tokenService.deleteToken("jwt");
    this.userService.deleteUser();
  }

  async login(username: string, password: string): Promise<User> {
    
    const credentials = {
      email: username,
      password: password
    };

    return new Promise(async (resolve, reject) => {

      const res = await fetch(this.baseUrl + "/auth", {
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
        const user = await res.json();
        if (user) {
          this.userService.saveUser(user);
        }
        resolve(user);
      } else {
        reject(null);
      }
    });
  }
}
