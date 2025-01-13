import { Component, effect, Input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import {PartyServiceService} from '../../services/party-service.service';
import {Party} from '../../_model/party';
import {InvalidPopupComponent} from '../../invalid-popup/invalid-popup.component';

@Component({
  standalone: true,
  selector: 'app-create-party-button-click-window',
  imports: [FormsModule, CommonModule, InvalidPopupComponent],
  templateUrl: './create-party-button-click-window.component.html',
  styleUrls: ['./create-party-button-click-window.component.css']
})
export class CreatePartyButtonClickWindowComponent implements OnInit{

  party : Party | null = null;

  constructor(private partyService: PartyServiceService) {
    effect(() => {
      this.party = this.partyService._lastParty();
      console.log("effect called in CreatePartyButtonClickWIndow");
    });

  }

  ngOnInit(): void {
    this.setPlaceholders();
  }

  partyname : string = '';
  start_date: string = '';
  end_date: string = '';

  // State for the popup
  popupMessage: string = ''; // Error message for the popup
  showPopup: boolean = false; // Controls popup visibility

  onSubmit() {
    // Validate input fields before creating the party
    if (!this.validateInputs()) {
      return; // Stop submission if validation fails
    }

    console.log("on submit is called");

    this.partyService.getHostedBy().then((hostedBy) => {
      const party: Party = {
        name: this.partyname,
        start_date: this.start_date,
        end_date: this.end_date,
        hosted_by: hostedBy || ''}

      this.partyService.createParty(party);
    });
  }

  /*
  sets the date Placeholders : start is today() and end is today() + 1 day
  datatype: datetime-local
  */
  startDatePlaceholder: string = '';
  endDatePlaceholder: string = '';

  validateInputs(): boolean {
    let message = '';

    if (!this.partyname.trim()) {
      message += 'Party name is required. ';
    }
    if (this.start_date >= this.end_date) {
      message += 'End date must be after the start date. ';
    }

    if (message) {
      this.popupMessage = message; // Set the error message for the popup
      this.showPopup = true; // Show the popup
      return false; // Validation failed
    }

    return true; // Validation passed
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

  // Close the popup
  closePopup(): void {
    this.showPopup = false;
  }

}
