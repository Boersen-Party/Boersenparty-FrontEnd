import { Component } from '@angular/core';
import { PartyServiceService } from '../services/party-service.service';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private partyService : PartyServiceService){}

}
