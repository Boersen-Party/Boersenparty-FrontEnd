import { Component, effect, OnInit } from '@angular/core';
import { PartyServiceService } from '../../services/party-service.service';
import { Party } from '../../_model/party';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-created-party-tab',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './created-party-tab.component.html',
  styleUrl: './created-party-tab.component.css'
})
export class CreatedPartyTabComponent {  
  party: Party | null = null;


  constructor(private partyService: PartyServiceService){
    effect(() => {
      this.party = this.partyService._lastParty();
    });
  }



}


