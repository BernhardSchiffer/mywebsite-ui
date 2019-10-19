export class Login {

   email: string;
   password: string;

   constructor(data) {
      this.email = data.get('email');
      this.password = data.get('password');
   }
}