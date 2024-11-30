import { Component, effect, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {PartyServiceService} from '../../services/party-service.service';
import {Party} from '../../_model/party';

@Component({
  standalone: true,
  selector: 'app-create-party-button-click-window',
  imports: [FormsModule],
  templateUrl: './create-party-button-click-window.component.html',
  styleUrls: ['./create-party-button-click-window.component.css']
})
export class CreatePartyButtonClickWindowComponent implements OnInit{

  parties: Party[] = [];


  constructor(private partyService: PartyServiceService) {
    effect(() => {
      this.parties = this.partyService.parties();
    });
  }

  ngOnInit(): void {
    this.setPlaceholders();
  }


  partyname : string = '';
  start_date: string = '';
  end_date: string = '';



  onSubmit() {
    const party: Party = {
      name: this.partyname,
      start_date: this.start_date,
      end_date: this.end_date,
    };


    const validationResult = this.validatePartyDetails(party);

    if (validationResult !== true) {
      console.log(validationResult);
      return;
    }

    this.partyService.createParty(party);

  }
  validatePartyDetails(party: Party): string | boolean {
    if (!party.name || party.start_date.length !== 16 || party.end_date.length !== 16) {
      return "Please fill out all details and ensure dates are in YYYY-MM-DDTHH:mm format!";
    }

    const currentDate = new Date();
    const startDate = new Date(party.start_date);
    const endDate = new Date(party.end_date);

    if (startDate <= currentDate || endDate <= currentDate || endDate <= startDate) {
      return "Start and end dates must be in the future, with the end date after the start date!";
    }

    return true;
  }

  /*

 sets the date Placeholders : start is today() and end is today() + 1 day
 datatype: datetime-local
  */
  startDatePlaceholder: string = '';
  endDatePlaceholder: string = '';



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
