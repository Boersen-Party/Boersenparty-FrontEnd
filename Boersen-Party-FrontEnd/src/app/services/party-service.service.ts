import { Injectable, signal } from '@angular/core';
import { Party } from '../_model/party';
import axios from "axios";
import { baseURL } from '../_config/config';
import { timer } from 'rxjs';
import { AuthService } from './auth.service';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})

export class PartyServiceService {
  timer = timer(0, 30000)
  parties = signal<Party[]>([]);

  
  constructor(private authService: AuthService) {
    this.timer.subscribe(_ => {
      console.log("timer subscribed.. fetching parties now..");
      this.fetchParties();
    
    })
  }


  async getHostedBy() {
    try {
      const user: KeycloakProfile = await this.authService.loadUserProfile();
      return user.username;
    } catch (error) {
      console.error('Error fetching Keycloak profile:', error);
      return null;
    }
  }




  async fetchParties() {
    console.log("fetchParties() called");
    const headers = await this.authService.addTokenToHeader();



    axios.get(baseURL, {
      headers:headers,
    })
      .then(response => {
        console.log(".then accessed!!, response =");
        console.log(response);

        const fetchedParties = response.data;
        console.log("fetched parties is:");
        console.log(fetchedParties);

        try {
          this.parties.set(fetchedParties);
        } catch (error) {
          console.error("Error while setting parties:", error);
          console.error("Error while setting parties:", error);
          console.error("Error while setting parties:", error);
          console.error("Error while setting parties:!!!!!!!!!!!!!!!!!!", error);
          //this.parties.set([]); // Fallback for an error in setting parties
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);

      });


  }




  async createParty(newParty: Party) {
    try {
      const validationResult = await this.validatePartyDetails(newParty);

      if (validationResult !== true) {
        console.error(validationResult);
        return;
      }

      const headers = await this.authService.addTokenToHeader();
      axios
        .post(baseURL, newParty, { headers })
        .then((response) => {
          const createdParty = response.data;
          this.parties.update((parties) => [...parties, createdParty]);
          console.log('Party created:', createdParty);
        })
        .catch((error) => {
          console.error('Error adding party:', error);
        });
    } catch (error) {
      console.error('Error resolving token or creating party:', error);
    }
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

}


