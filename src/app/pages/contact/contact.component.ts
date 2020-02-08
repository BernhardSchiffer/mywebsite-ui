import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Question } from "../../models/Question";
import { confetti } from "dom-confetti";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  errorMessage: string;

  questionForm: FormGroup;
  questionName: string;
  questionEmail: string;
  question: string;
  buttondisabled: boolean = false;

  constructor(private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      questionName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[^0-9]{1,}")
        ])
      ],
      questionEmail: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[A-Za-z0-9._%+-ß?$&]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
          )
        ])
      ],
      questionSubject: ["", Validators.required],
      question: ["", Validators.required]
    });
  }

  ngOnInit() {}

  async sendQuestion(formData) {
    this.buttondisabled = true;

    const confettiCanon1: HTMLElement = document.querySelector(
      "#confettiCanon1"
    );
    const confettiCanon2: HTMLElement = document.querySelector(
      "#confettiCanon2"
    );
    const confettiConfig1 = {
      angle: 60,
      spread: 60,
      startVelocity: 70,
      elementCount: 70,
      dragFriction: 0.1,
      duration: 5000,
      delay: 0,
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const confettiConfig2 = {
      angle: 120,
      spread: 60,
      startVelocity: 70,
      elementCount: 70,
      dragFriction: 0.1,
      duration: 5000,
      delay: 0,
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    let myForm: HTMLFormElement = document.forms["questionForm"];
    let question = await new Question(formData);

    fetch("https://api.schiffer.dev/forms/contactform", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(question)
    })
      .then(res => {
        confetti(confettiCanon1, confettiConfig1);
        confetti(confettiCanon2, confettiConfig2);
        myForm.reset();
      })
      .catch(error => {
        this.errorMessage = "Ups, an error occured, please try again";
      });

    this.buttondisabled = false;
    return false;
  }
}
