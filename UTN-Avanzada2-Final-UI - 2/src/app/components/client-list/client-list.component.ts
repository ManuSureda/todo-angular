import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/custom-validators';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  message = "";

  removeForm = new FormGroup({
    clientId: new FormControl('', [Validators.required, CustomValidators.numbersOnly()], [CustomValidators.clientExist(this.clientService)])
  });

  clientList : Array<Client> = [];

  constructor(private clientService : ClientService) { }

  get clientId() { return this.removeForm.get('clientId'); }

  ngOnInit(): void {
    this.clientService.getAll()
      .then(response => {
        this.clientList = response.slice();
      })
  }

  onSubmit() {
    let id = this.removeForm.get('clientId').value;
    this.clientService.deleteClient(Number(id))
      .then(() => {
        this.message = "Client successfully eliminated";
      })
      .catch(err => {
        console.log(err);
        this.message = "Sorry, something went wrong";
      })
  }

}
