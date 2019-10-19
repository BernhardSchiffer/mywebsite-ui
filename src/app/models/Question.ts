export class Question {

   name: string;
   email: string;
   question: string;

   constructor(data) {
      this.name = data.questionName.trim();
      this.email = data.questionEmail.trim();
      this.question = data.question.trim();
   }
}