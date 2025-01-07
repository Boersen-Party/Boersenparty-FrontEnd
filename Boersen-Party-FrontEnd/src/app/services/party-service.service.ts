import { computed, Injectable, Signal, signal } from '@angular/core';
import { Party } from '../_model/party';
import axios from "axios";
import { baseURL } from '../_config/config';
import { timer } from 'rxjs';
import { AuthService } from './auth.service';
import { KeycloakProfile } from 'keycloak-js';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';


@Injectable({
  providedIn: 'root'
})

export class PartyServiceService {
  timer = timer(0, 30000)
  parties = signal<Party[]>([]);
  //partyName = signal<string>('<Keine aktive Party gefunden>');

  
  constructor(private authService: AuthService, private router: Router) {
    this.timer.subscribe(_ => {
      console.log("timer subscribed.. fetching parties now..");
      this.fetchParties();
    
    })
  }

  get activePartyId(): Signal<number | null> {
    return computed(() => {
      const parties = this.parties();
      return parties.length > 0 && parties[0]?.id !== undefined ? parties[0].id : null;
    });
  }



  getPartyGuestUuid(): string | undefined {
    return Cookies.get('PartyGuestUuid');  
  }

  setPartyGuestUuid(uuid: string): void {
    Cookies.set('PartyGuestUuid', uuid, { expires: 7 });  
  }

  async joinParty(accessCode: string) {
    let uuid = this.getPartyGuestUuid();

    if (!uuid) {
      console.log('UUID not found, sending request to create one...');

      try {
        const url = `${baseURL}/rooms`;
        const response = await axios.post(url, { accessCode });

        const joinedUser = response.data;

        if (joinedUser.uuid) {
          uuid = joinedUser.uuid;
          if (uuid) {
            this.setPartyGuestUuid(uuid);
          }
        }

        console.log('Successfully joined the party:', joinedUser);

        this.router.navigate(['/user/home']); 
      } catch (error) {
        console.error('Error joining the party:', error);
      }
    } else {
      console.log('UUID already exists, redirecting directly...');
      this.router.navigate(['/user/home']);  
    }
  }

  async getQRCodeBase64(): Promise<string> {
    try {
      const headers = await this.authService.addTokenToHeader();
      const activePartyId = this.activePartyId();
      const url = `${baseURL}/${activePartyId}/qrcodes`;
      console.log("calling url:", url);
      const response = await axios.get(url, { headers });
      console.log("response.data FOR QR CODE  is:", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching QR code:', error);
      throw error;
    }
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
          //this.partyName.set(fetchedParties.length > 0 ? fetchedParties[0].name : '<Keine aktive Party gefunden>');

        } catch (error) {
          console.error("Error while setting parties:", error);
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
          console.log('Party created:', createdParty);
          console.log('Party created:', createdParty);
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


