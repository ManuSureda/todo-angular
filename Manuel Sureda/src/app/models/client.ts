export class Client {
    clientId: string;
    first_name: string;
    last_name: string;
    email: string;
    credit_card_type: string;
    credit_card_number: string;
    debt: number;

    get fullName() {
        return this.first_name + ' ' + this.last_name;
    }

}
