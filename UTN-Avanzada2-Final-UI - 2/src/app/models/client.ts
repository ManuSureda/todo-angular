export class Client {
    clientId: string;
    name: string;
    last_name: string;
    email: string;
    credit_card_type: string;
    credit_card_number: string;
    debt: number;

    get fullName() { return this.name + ' ' + this.last_name; }
}
