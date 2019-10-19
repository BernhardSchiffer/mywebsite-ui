export class Registration {
  firstname: string;
  lastname: string;
  birthday: Date;
  telefon: string;
  email: string;
  address: string;
  postcode: number;
  city: string;
  needMedicine: boolean;
  medicine: string;
  insurant: string;
  insurance: string;
  canSwim: boolean;
  VegetarianOrVegan: string;
  misc: string;
  passengersArrival: number;
  passengersDeparture: number;

  constructor(data, birthday) {
    this.firstname = data.firstname.trim();
    this.lastname = data.lastname.trim();
    this.birthday = birthday;
    this.telefon = data.telefon.trim();
    this.email = data.email.trim();
    this.address = data.address.trim();
    this.postcode = data.postcode.trim();
    this.city = data.city.trim();
    if (data.medicine) {
      this.medicine = data.medicine.trim();
    }
    this.insurant = data.insurant.trim();
    this.insurance = data.insurance.trim();
    if (data.canSwim === "true") {
      this.canSwim = true;
    } else {
      this.canSwim = false;
    }
    if (data.isVegetarian === true) {
      this.VegetarianOrVegan = "vegetarian";
    }
    if (data.isVegan === true) {
      this.VegetarianOrVegan = "vegan";
    }
    if (data.misc) {
      this.misc = data.misc.trim();
    }
    this.passengersArrival = Math.floor(data.passengersArrival);
    this.passengersDeparture = Math.floor(data.passengersDeparture);
  }
}
