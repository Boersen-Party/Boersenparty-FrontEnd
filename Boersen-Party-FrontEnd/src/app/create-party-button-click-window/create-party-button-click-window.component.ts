import { Component } from '@angular/core';
import { PartyService, Party } from '../services/party.service';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-create-party-button-click-window',
    imports: [FormsModule],
    templateUrl: './create-party-button-click-window.component.html',
    styleUrls: ['./create-party-button-click-window.component.css']
})
export class CreatePartyButtonClickWindowComponent {

  constructor(private partyService: PartyService) {}

  partyname : string = '';
  start_date: string = '';
  end_date: string = '';

  onSubmit() {
    const party: Party = {
      name: this.partyname,
      start_date: this.start_date,
      end_date: this.end_date,
    };
  
    this.partyService.createParty(party).subscribe({
      next: (response) => {
        console.log('Party created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating party:', error);
      },
      complete: () => {
        console.log('Request completed!');
      },
    });

}

}
