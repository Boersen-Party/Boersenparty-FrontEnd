import { Component } from '@angular/core';
import { PartyServiceService}  from '../services/party-service.service';
import { FormsModule } from '@angular/forms';
import { Party } from '../_model/party';



@Component({
    selector: 'app-create-party-button-click-window',
    imports: [FormsModule],
    templateUrl: './create-party-button-click-window.component.html',
    styleUrls: ['./create-party-button-click-window.component.css']
})
export class CreatePartyButtonClickWindowComponent {

  constructor(public partyService: PartyServiceService) {}

  partyname : string = '';
  start_date: string = '';
  end_date: string = '';

  onSubmit() {
    const party: Party = {
      name: this.partyname,
      start_date: this.start_date,
      end_date: this.end_date,
    };
  
    this.partyService.createParty(party);

}

}
