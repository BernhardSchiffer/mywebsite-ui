import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Question } from "../../models/Question";
import { confetti } from "dom-confetti";
import { ContactService } from 'src/app/services/contact-service/contact.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  errorMessage: string;

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    question: new FormControl('')
  });
  buttondisabled: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private userService: UserService) {

    this.contactForm = this.fb.group({
      name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[^0-9]{1,}")
        ])
      ],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[A-Za-z0-9._%+-ß?$&]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
          )
        ])
      ],
      subject: ["", Validators.required],
      question: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      if(user) {
        this.contactForm.patchValue({
          name: user.name,
          email: user.email
        });
      } else {
        this.contactForm.patchValue({
          name: '',
          email: ''
        });
      }
    });
  }

  sendQuestion(formData) {
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

    const myForm: HTMLFormElement = document.forms["contactForm"];
    const question = new Question(formData);
    this.errorMessage = ""

    this.contactService.sendContactForm(question)
      .then(() => {
        confetti(confettiCanon1, confettiConfig1);
        confetti(confettiCanon2, confettiConfig2);
        myForm.reset();
      })
      .catch(() => {
        this.errorMessage = "Ups, an error occured, please try again";
      });

    this.buttondisabled = false;
    return false;
  }
}
