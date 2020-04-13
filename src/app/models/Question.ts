export class Question {
  name: string;
  email: string;
  subject: string;
  question: string;

  constructor(data) {
    this.name = data.name.trim();
    this.email = data.email.trim();
    this.subject = data.subject.trim();
    this.question = data.question.trim();
  }
}
