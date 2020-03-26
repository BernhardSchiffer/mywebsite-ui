import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { Question } from 'src/app/models/Question';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = environment.backendBaseUrl;

  constructor(private http: HttpClient) { }

  sendContactForm(question: Question) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post(this.baseUrl + "/forms/contactform", question, httpOptions).toPromise();
  }
}
