export class NewUser {
   name: string;
   email: string;
   password: string;

   constructor(data) {
      this.name = data.get('name');
      this.email = data.get('email');
      this.password = data.get('password');
   }
}