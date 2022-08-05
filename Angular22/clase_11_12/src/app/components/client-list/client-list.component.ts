import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientList: Array<Client> = [];
  errorMsg: string = '';

  constructor(private clientService: ClientServiceService) { }

  ngOnInit(): void {
    this.clientService.getAll()
      .then(response => {
        this.clientList = response;
        console.log(response);
        
      })
      .catch(error => {
        this.errorMsg = error;
        console.log(error);
      })
  }

  delete(){
    this.clientService.delete("3");
    console.log(this.clientList);
    this.clientService.getAll()
      .then(response => {
        this.clientList = response;
        console.log(response);
        
      })
      .catch(error => {
        this.errorMsg = error;
        console.log(error);
      })
    
  }

}
