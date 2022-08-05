import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/models/incident';
import { Priority } from 'src/app/models/priority';
import { IncidentService } from 'src/app/services/incident.service';
import { PriorityService } from 'src/app/services/priority.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  incidentList: Array<Incident> = [];
  priorityList: Array<Priority> = [];

  constructor(private incidentService: IncidentService, private priorityService: PriorityService) { }

  ngOnInit(): void {
    this.incidentService.getAll()
      .then(response => {
        this.incidentList = response;

        this.priorityService.getAll()
          .then(response => {
            this.priorityList = response;
          })
          .catch(error => {
            console.log(error);
          })
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPriorityByPriorityId(priorityId: number)
  {
    for(let i = 0; i < this.priorityList.length; i++){
      if(this.priorityList[i].priorityId == priorityId){
        return this.priorityList[i].description;
      }
    }

    return "";
  }
}
