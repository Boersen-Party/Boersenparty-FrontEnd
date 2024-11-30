import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {Party} from '../../_model/party';
import {PartyServiceService} from '../../services/party-service.service';



@Component({
  standalone: true,
  selector: 'app-create-party-button-click-window',
  imports: [FormsModule],
  templateUrl: './create-party-button-click-window.component.html',
  styleUrls: ['./create-party-button-click-window.component.css']
})
export class CreatePartyButtonClickWindowComponent {

  constructor(private partyService: PartyServiceService) {}

  partyname : string = '';
  start_date: string = '';
  end_date: string = '';

  onSubmit() {
    const party: Party = {
      name: this.partyname,
      start_date: this.start_date,
      end_date: this.end_date,
    };

    //TODO: send party to backend!
    console.log(party)
}

}
