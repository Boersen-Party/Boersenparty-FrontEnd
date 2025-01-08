import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyServiceService } from '../services/party-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent  {

  accessCode: string = ''; 

  constructor(
    private route: ActivatedRoute,
    private partyService: PartyServiceService,
    private router: Router 
  ) {}


  //start over with the routes.
  

  joinParty() {
    if (this.accessCode.length === 5) {
      this.partyService.joinParty(this.accessCode)
        .catch(error => console.error('Failed to join the party:', error));
    } else {
      console.error("Invalid Access Code entered!");
    }
  }
  

}
  
