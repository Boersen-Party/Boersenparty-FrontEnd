import { Component, OnInit } from '@angular/core';
import { PartyServiceService}  from '../services/party-service.service';
import { FormsModule } from '@angular/forms';
import { Party } from '../_model/party';



@Component({
    selector: 'app-create-party-button-click-window',
    imports: [FormsModule],
    templateUrl: './create-party-button-click-window.component.html',
    styleUrls: ['./create-party-button-click-window.component.css']
})
export class CreatePartyButtonClickWindowComponent implements OnInit{

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


 /*

sets the date Placeholders : start is today() and end is today() + 1 day
datatype: datetime-local
 */
startDatePlaceholder: string = '';
endDatePlaceholder: string = '';

ngOnInit(): void {
  this.setPlaceholders();
}

setPlaceholders() {

  const today = new Date(); 
  //local timezone is 1h behind Germany
  // extra 5 minutes for the user because start_date cannot be in the future
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset() + 5);
  const dayLater = new Date(today);
  dayLater.setDate(today.getDate() + 1);
  // Format the dates to `yyyy-MM-ddTHH:mm` for `datetime-local`
  this.start_date = today.toISOString().slice(0, 16);
  this.end_date = dayLater.toISOString().slice(0, 16);

}

}
