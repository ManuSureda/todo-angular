export class Client {
    firstName!: string;
    lastName!: string;
    email!: string;
    creditCardType!: string;
    creditCardNumber!: string;
    Debt!: number;
    id!: number;

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}
