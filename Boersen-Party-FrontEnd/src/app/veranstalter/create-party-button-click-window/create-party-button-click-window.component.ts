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
      console.log("effect called in CreatePartyButtonClickWIndow");
    });

  }
    


  ngOnInit(): void {
    this.setPlaceholders();
  }


  partyname : string = '';
  start_date: string = '';
  end_date: string = '';



  onSubmit() {

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
