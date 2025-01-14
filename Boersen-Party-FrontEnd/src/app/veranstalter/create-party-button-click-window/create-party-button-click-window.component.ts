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

  popupMessage: string = '';
  showPopup: boolean = false;

  onSubmit() {
    if (!this.validateInputs()) {
      return;
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
      this.popupMessage = message;
      this.showPopup = true;
      return false;
    }

    return true;
  }

  setPlaceholders() {

    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset() + 5);
    const dayLater = new Date(today);
    dayLater.setDate(today.getDate() + 1);
    this.start_date = today.toISOString().slice(0, 16);
    this.end_date = dayLater.toISOString().slice(0, 16);
  }
  closePopup(): void {
    this.showPopup = false;
  }

}
