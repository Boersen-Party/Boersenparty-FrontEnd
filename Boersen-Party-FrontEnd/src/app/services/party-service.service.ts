import { Injectable, signal, effect } from '@angular/core';
import { Party } from '../_model/party';
import axios from "axios";
import { baseURL } from '../_config/config';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartyServiceService {
  timer = timer(0, 30000)
  
  constructor() {
    
    console.log("PartyServiceConstructor called");
    this.timer.subscribe(() => {
     console.log("fetching parties now...");
     this.fetchParties(); // Call fetchParties every 3 seconds
   });

   // is used in CreatePartyButtonClickWindowComponent
 }

  parties = signal<Party[]>([]);


  fetchParties() {
    console.log("fetchParties() called")
    axios.get(baseURL)
      .then(response => {
        console.log(".then accessed!!, response =");
        console.log(response);
        const fetchedParties = response.data;
  
        this.parties.set(fetchedParties);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  


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
      .catch((error: any) => {
        console.error('Error adding party:', error);
      });
  }
}
