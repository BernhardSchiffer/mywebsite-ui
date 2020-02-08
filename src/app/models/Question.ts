export class Question {
  name: string;
  email: string;
  subject: string;
  question: string;

  constructor(data) {
    this.name = data.questionName.trim();
    this.email = data.questionEmail.trim();
    this.subject = data.questionSubject.trim();
    this.question = data.question.trim();
  }
}
