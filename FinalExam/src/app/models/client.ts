import { Injectable } from "@angular/core";
import { CompanyService } from "../services/company.service";

export class Client {
    first_name: string;
    last_name: string;
    email: string;
    companyId: string;

    @Injectable({
        providedIn: 'root'
    })
    companyService : CompanyService;

    get companyName() { 

        let ans = "";
        if (this.companyId == undefined) {
            return "aaaaaaa";
        } else {
            this.companyService.getById(this.companyId)
                .then(response => {
                    ans = "ccccccc";                
                    // ans = response[0]['company_name'];
                })
                .catch(err => {
                    return "bbbbbbbbbb";
                    
                })
            return ans;
        }
    }
}
