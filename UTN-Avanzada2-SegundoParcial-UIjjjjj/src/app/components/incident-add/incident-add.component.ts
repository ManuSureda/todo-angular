import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/custom-validators';
import { Incident } from 'src/app/models/incident';
import { Priority } from 'src/app/models/priority';
import { DomainService } from 'src/app/services/domain.service';
import { IncidentService } from 'src/app/services/incident.service';
import { PriorityService } from 'src/app/services/priority.service';

@Component({
  selector: 'app-incident-add',
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent implements OnInit {
  priorityList: Array<Priority> = [];

  incidentFormGroup = new FormGroup({
    priorityId: new FormControl('', [ Validators.required ]),
    domain: new FormControl('', [ Validators.required ], [ CustomValidators.domainExists(this.domainService) ]),
    title: new FormControl('', [ Validators.required ]),
    description: new FormControl('', [ Validators.required ]),
    creator: new FormControl('', [ Validators.required ]),
    phoneNumber: new FormControl('', [ CustomValidators.numbersOnly() ])
  });

  get priorityId() { return this.incidentFormGroup.get("priorityId") }
  get domain() { return this.incidentFormGroup.get("domain") }
  get title() { return this.incidentFormGroup.get("title") }
  get description() { return this.incidentFormGroup.get("description") }
  get creator() { return this.incidentFormGroup.get("creator") }
  get phoneNumber() { return this.incidentFormGroup.get("phoneNumber") }

  constructor(private incidentService: IncidentService, private priorityService: PriorityService, private domainService: DomainService) { }

  ngOnInit(): void {
    this.priorityService.getAll()
      .then(response => {
        this.priorityList = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  onSubmit(){
    let incident = new Incident();
    incident.priorityId = this.priorityId.value;
    incident.title = this.title.value;
    incident.creator = this.creator.value;
    incident.description = this.description.value;
    incident.domainName = this.domain.value;
    incident.phoneNumber = this.phoneNumber.value;

    this.incidentService.add(incident)
      .then(response => {
        console.log("Incident Successfully Added");
      })
      .catch(error => {
        console.log(error);
      })
  }
}
