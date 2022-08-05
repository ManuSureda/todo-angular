import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/commons/custom-validator';
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
    clientId: new FormControl('', [Validators.required, CustomValidator.numbersOnly()], [CustomValidator.clientExist(this.clientService)])
  });

  errorMessage = "";
  successMessage = "";

  constructor(private clientService : ClientService) { }

  get clientId() {return this.removeForm.get('clientId')}

  ngOnInit(): void {
    this.clientService.getAll()
      .then(response => {
        this.clientList = response.slice();

        // this.clientList.sort((a, b) => {
        //   if (a.debt < b.debt) {
        //     return -1;
        //   } else if (a.debt > b.debt) {
        //     return 1;
        //   }
        //   return 0;
        // })

        this.clientList = this.clientList.filter((client) => {
          if (client.debt < 500) {
            return true;
          }
          return false;
        });
        
      })
      .catch(err => {
        console.log(err);
        this.errorMessage = "Sorry, something went wrong";
      })
  }

  onSubmit() {
    this.clientService.getById(this.clientId.value)
      .then(response => {
        if (response['length'] === 1) {
          this.successMessage = "Client successfully eliminated";
          console.log(response);
        } else {
          this.errorMessage = "Client ID does not exist";
        }
      })
      .catch(err => {
        console.log(err);
        this.errorMessage = "Sorry, something went wrong";
      });
  }

}
