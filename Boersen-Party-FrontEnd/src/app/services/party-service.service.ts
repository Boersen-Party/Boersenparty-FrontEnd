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
  timer = timer(0, 100000)
  _lastParty = signal<Party | null>(null);

  private _activePartyIdUser : number | null = null;
  private activePartyIdKey = 'activePartyId';
  private userUUIDKey = 'userUUID';


  constructor(private authService: AuthService, private router: Router) {
    const works_for = this.authService.getWorksFor();
    console.log("works_for is:", works_for);
    if (works_for !== "This user is not _PERSONAL") {
      this.setActivePartyIdUsingWorksFor(works_for);
    }

    this.fetchPartiesOnce();



  }


  setActivePartyIdUsingWorksFor(worksFor: string): void {
    const url = `${baseURL}/personal-party-id?worksFor=${encodeURIComponent(worksFor)}`;

    axios
      .get(url)
      .then((response) => {
        const partyId = response.data;

        if (partyId) {
          this.setActivePartyId(partyId);
          console.log(`PERSONALER partyId is: ${partyId}`);
        } else {
          console.warn(`No active party ID found for worksFor: ${worksFor}`);
        }
      })
      .catch((error) => {
        console.error(`Error fetching active party ID for worksFor: ${worksFor}`, error);
      });
  }







  setActivePartyId(partyId: number): void {
    Cookies.set(this.activePartyIdKey, partyId.toString(), {
      expires: 7,
      path: '/',
    });
  }

  getActivePartyId(): number | null {
    const partyId = Cookies.get(this.activePartyIdKey);
    return partyId ? parseInt(partyId, 10) : null;
  }

  getUserUUID(): string | null {
    const uuid = Cookies.get(this.userUUIDKey);
    return uuid ?? null;
  }
  /*
    get activePartyId(): Signal<number | null> {
      return computed(() => {
        const parties = this.parties();
        return parties.length > 0 && parties[0]?.id !== undefined ? parties[0].id : null;
      });
    }
      */

  get activePartyIdUser(): number | null {
    return this._activePartyIdUser;
  }

// Method to check if UUID is valid
  async checkUUIDValidity(uuid: string): Promise<boolean> {
    try {
      const response = await axios.get(`${baseURL}/check-uuid/${uuid}`);
      console.log("response for check UUID Validity is:", response);
      this._activePartyIdUser = response.data.partyId;
      return response.data; // Assuming the backend returns an object with a valid flag
    } catch (error) {
      console.error('Error checking UUID:', error);
      return false;
    }
  }

// Method to create UUID and join the party
  async joinParty(accessCode: string): Promise<void> {

    console.log('UUID not found, sending request to create one...');
    try {
      const url = `${baseURL}/rooms`;
      console.log("url is :", url);
      console.log("accessCode is:", accessCode);
      const response = await axios.post(url, { accessCode });

      const { party_id, uuid } = response.data;
      console.log("From joinParty, response is:", response.data);
      // Persist UUID and Active Party ID
      Cookies.set(this.userUUIDKey, uuid, {
        expires: 7, // Cookie expiration in days
        path: '/',  // Ensure cookie is accessible throughout the site
      });
      console.log("cookies are now:" , this.getUserUUID())
      this.setActivePartyId(party_id);

      console.log(`Joined party with ID: ${party_id}, UUID: ${uuid}`);
      this.router.navigate(['/user/home']);
    }
    catch (error) {
      console.error('Error joining the party:', error);
    }
  }






  async getQRCodeBase64(): Promise<string> {
    try {
      const headers = await this.authService.addTokenToHeader();
      const activePartyId = this.getActivePartyId();
      const url = `${baseURL}/${activePartyId}/qrcodes`;
      const response = await axios.get(url, { headers });
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




  async fetchPartiesOnce(): Promise<void> {
    try {
      const headers = await this.authService.addTokenToHeader();
      const response = await axios.get<Party[]>(baseURL, { headers });

      if (response.data.length > 0) {
        const lastParty = response.data[response.data.length - 1];
        this._lastParty.set(lastParty); // Update the signal with the last party
        console.log('Last party set:', lastParty);
      } else {
        console.warn('No parties found in the response.');
      }
    } catch (error) {
      console.error('Error fetching parties:', error);
    }



  }




  async createParty(newParty: Party) {
    try {
      // Validate party details
      const validationResult = await this.validatePartyDetails(newParty);
      if (validationResult !== true) {
        console.error(validationResult);
        return;
      }

      const headers = await this.authService.addTokenToHeader();

      const response = await axios.post(baseURL, newParty, { headers });
      console.log("response in PSS is:", response);

      const createdParty = response.data;


      this._lastParty.update(() => createdParty);
      console.log("Party in signal:", this._lastParty());


      this.setActivePartyId(createdParty.id); //susssssss
    } catch (error) {
      console.error('Error creating party:', error);
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
