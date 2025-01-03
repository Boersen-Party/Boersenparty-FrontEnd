import { Component, Input } from '@angular/core';
import { Party } from '../../_model/party';

@Component({
  standalone:true,
  selector: 'app-party-header',
  imports: [],
  templateUrl: './party-header.component.html',
  styleUrl: './party-header.component.css'
})
export class PartyHeaderComponent {
  @Input() parties: Party[] = [];
  @Input() partyName: string = '';


}
