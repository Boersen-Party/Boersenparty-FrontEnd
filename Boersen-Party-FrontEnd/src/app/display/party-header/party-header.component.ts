import { Component, effect, Input } from '@angular/core';
import { Party } from '../../_model/party';
import { PartyServiceService } from '../../services/party-service.service';

@Component({
  standalone: true,
  selector: 'app-party-header',
  imports: [],
  templateUrl: './party-header.component.html',
  styleUrl: './party-header.component.css'
})
export class PartyHeaderComponent {
  @Input() partyName: string | null = null;
  accesscode: string = '';
  
  constructor(private partyService: PartyServiceService){
  effect(() => {
        this.accesscode = this.partyService._lastParty()?.accessCode ?? '';
       
    });
  }
}
