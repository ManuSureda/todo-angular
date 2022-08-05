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

  ngOnInit() {
    // this.clientService.getAll()
    //   .then(response => {
    //     response.forEach(element => {

    //       // console.log(client);
          
    //       this.companyService.getById(element['companyId'])
    //         .then(response2 => {
    //           // console.log(response2[0]['active']);
              
    //           if (response2[0]['active']) {
    //             let client = {
    //               clientId: element['id'],
    //               first_name: element['first_name'],
    //               last_name: element['last_name'],
    //               email: element['email'],
    //               company_name: response2[0]['company_name']
    //             };
    //             this.clientList.push(client);
    //           }
    //         })
    //     });
    //     console.log(this.clientList);
        
    //   })

    this.clientService.getAllActives()
      .then(response => {
        console.log(response);
        this.clientList = response;
        console.log(this.clientList);
        
      })
  }

}
