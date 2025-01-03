import { Component, effect, OnInit } from '@angular/core';
import { PartyServiceService } from '../../services/party-service.service';
import { Party } from '../../_model/party';

@Component({
  selector: 'app-created-party-tab',
  standalone: true,
  imports: [],
  templateUrl: './created-party-tab.component.html',
  styleUrl: './created-party-tab.component.css'
})
export class CreatedPartyTabComponent {  
  parties: Party[] = [];


  constructor(private partyService: PartyServiceService){
    //maybe optimizie this, since there is just 1 party active at a time - remove?
    // why fetch parties constantly if there is just 1
    effect(() => {
      this.parties = this.partyService.parties();
      console.log("Updated parties in CreatedPartyTabComponent:", this.parties);
    });
  }



}


