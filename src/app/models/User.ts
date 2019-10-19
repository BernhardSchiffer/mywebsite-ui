export class User {
   name: string;
   email: string;

   constructor(data) {
      this.name = data.get('name');
      this.email = data.get('email');
   }
}