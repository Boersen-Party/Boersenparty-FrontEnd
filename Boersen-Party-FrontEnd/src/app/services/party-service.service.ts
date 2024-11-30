import { Injectable, signal, effect } from '@angular/core';
import { Party } from '../_model/party';
import axios from "axios";
import { baseURL } from '../_config/config';

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {

  constructor() { 
    console.log("PartyServiceConstructor called"); 
    
    effect(() => {
      console.log("parties updated:", this.parties());
    });
  }

  parties = signal<Party[]>([]);

  createParty(newParty: Party) {
    console.log('addParty called, URL is: ' + baseURL);
    console.log(newParty);
    axios
      .post(baseURL, newParty)
      .then((response) => {
        const createdParty = response.data;
        console.log('Party created:', createdParty);

        //add party
        this.parties.update((parties) => [...parties, createdParty]);
      })
      .catch((error) => {
        console.error('Error adding party:', error);
      });
  }
}
