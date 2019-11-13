import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  getToken(key: string): string {
    return localStorage.getItem(key);
    //return this.getCookie(key);
  }

  saveToken(key: string, token: string) {
    localStorage.setItem(key, token);
    //this.setCookie(key, token);
  }

  deleteToken(key: string) {
    localStorage.removeItem(key);
    //this.deleteCookie(key);
  }

  private setCookie(cname: string, cvalue: number, exdays: number = 1) {
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  private deleteCookie(cname: string) {
    document.cookie =
      cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  private getCookie(cname: string) {
    let name: string = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
