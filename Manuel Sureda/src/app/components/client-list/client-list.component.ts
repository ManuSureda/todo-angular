import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/commons/custom-validators';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientList : Array<Client> = [];

  removeForm = new FormGroup({
    clientId: new FormControl('', [Validators.required, CustomValidators.numbersOnly()])
  });

  errorMsg = '';
  successMsg = '';

  constructor(private clientService : ClientService) { }

  get clientId() { return this.removeForm.get('clientId'); }

  ngOnInit(): void {
    this.clientService.getAll()
      .then(response => {

        // let array = response.filter((a) => { 
        //   if (a['clientId'] < 10) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        //  })
           

        response.forEach(element => {

          let client = new Client();

          client.clientId = element['clientId'];
          client.first_name = element['firstName'];
          client.last_name = element['lastName'];
          client.email = element['email'];
          client.credit_card_type = element['creditCardType'];
          client.credit_card_number = element['creditCardNumber'];
          client.debt = element['debt'];

          this.clientList.push(client);

        });
        
      })
  }

  onSubmit() {
    this.clientService.deleteById(this.clientId.value)
      .then(response => {
        this.successMsg = 'Client successfully removed.';
        this.ngOnInit();
      })
      .catch(error => {
        console.log(error);
        if (error.status === 404) {
          this.errorMsg = 'There is no client with that ID';
        } else {
          this.errorMsg = 'Sorry, something went wrogn.';
        }
      })
  }

}
