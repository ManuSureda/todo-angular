import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'http://localhost:8000/';

  constructor(private http : HttpClient, private companyService : CompanyService) { }

  getAll(): Promise<any> {
    return this.http.get(this.apiUrl + 'clientv2')
    .toPromise();
  }

  getById(companyId : string): Promise<any> {
    return this.http.get(this.apiUrl + 'clientv2/?companyId=' + companyId)
    .toPromise();
  }

  getAllActives(): Promise<any> {
    let clientList = [];
    const promise =  new Promise((resolve, reject) => {
    this.getAll()
      .then(response => {
        response.forEach(element => {
          
          this.companyService.getById(element['companyId'])
            .then(response2 => {
              
              if (response2[0]['active']) {
                let client = {
                  clientId: element['id'],
                  first_name: element['first_name'],
                  last_name: element['last_name'],
                  email: element['email'],
                  company_name: response2[0]['company_name']
                };
                clientList.push(client);
              }
            })
        });
        resolve(clientList);
      })
      .catch(error => {
        reject(error);
      })
    })
    return promise;
  }
}
