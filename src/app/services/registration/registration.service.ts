import { Injectable } from "@angular/core";
import { User } from "src/app/models/User";
import { UserService } from "../user-service/user.service";
import { TokenService } from "../token-service/token.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private http: HttpClient
  ) {}

  registerNewUser(newUser: User, password: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      let body = {
        name: newUser.name,
        email: newUser.email,
        password: password
      };

      //let headers = new HttpHeaders();

      //this.http.post("/api/users", JSON.stringify(body));

      let res = await fetch("http://localhost:8080/api/users", {
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
