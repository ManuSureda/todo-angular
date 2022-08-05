import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class clientListComponent implements OnInit {

  clientList = [];

  constructor(private clientService : ClientService, private companyService : CompanyService) { }

  // ngOnInit() {

  //   this.clientService.getAll()
  //     .then(responseClient => {
        
  //       for (let index = 0; index < responseClient['length']; index++) {
  //         const element = responseClient[index];

  //         this.companyService.getById((element['companyId']).toString())
  //           .then(responseId => {
              
  //             if (responseId[0]['active']) {
                
  //               let ans = {
  //                 first_name: element['first_name'],
  //                 last_name: element['last_name'],
  //                 email: element['email'],
  //                 company_name: responseId[0]['company_name']
  //               }

  //               this.clientList.push(ans);
                
  //             }

  //           }) 

  //       }
        
  //     })
  // }

  ngOnInit() {
    this.clientService.getAll()
      .then(response => {
        console.log(response);
        
      })
  }

}
