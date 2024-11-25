import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-party-button-click-window',
  standalone: true,
  imports: [],
  templateUrl: './create-party-button-click-window.component.html',
  styleUrls: ['./create-party-button-click-window.component.css']
})
export class CreatePartyButtonClickWindowComponent implements OnInit {

  startDatePlaceholder: string = '';
  endDatePlaceholder: string = '';

  ngOnInit(): void {
    this.setDatePlaceholders();
  }

  setDatePlaceholders() {
    const today = new Date();
    const twoDaysLater = new Date(today);
    twoDaysLater.setDate(today.getDate() + 2);

    // Format the date to yyyy-mm-dd format
    const todayFormatted = today.toISOString().split('T')[0];
    const twoDaysLaterFormatted = twoDaysLater.toISOString().split('T')[0];

    this.startDatePlaceholder = todayFormatted;
    this.endDatePlaceholder = twoDaysLaterFormatted;
  }
}
