import { Injectable, signal } from '@angular/core';
import { Party } from '../_model/party';
import axios from "axios";
import { baseURL } from '../_config/config';
import { Subject, Subscription, takeUntil, timer } from 'rxjs';
import { AuthService } from './auth.service';

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
  

  
  fetchParties() {
    console.log("fetchParties() called but its doing nothing atm");
    
    /*
    axios.get(baseURL)
      .then(response => {
        console.log(".then accessed!!, response =");
        console.log(response);
  
        const fetchedParties = response.data;
        console.log("fetched parties is:");
        console.log(fetchedParties);
  
        try {
          // Wrap the potentially problematic code in a try-catch
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
  
        // Handle network or Axios-specific errors
        this.parties.set([]); // Set an empty array to indicate an error
  
        // Optional: Add more error handling logic
      });

      */
  }
  
  


  async createParty(newParty: Party) {
    console.log('addParty called, URL is: ' + baseURL);
    console.log('New party:', newParty);
  
    try {
      // Use the AuthService to add the token to headers
      const headers = await this.authService.addTokenToHeader();
      console.log('Headers with token:', headers);
  
      // Make the POST request with headers
      axios
        .post(baseURL, newParty, {
          headers: headers, // Convert headers to JSON for Axios
        }) 
        .then((response) => {
          const createdParty = response.data;
          console.log('Party created:', createdParty);
  
          // Add party to the list
          this.parties.update((parties) => [...parties, createdParty]);
        })
        .catch((error: any) => {
          console.error('Error adding party:', error);
        });
    } catch (error) {
      console.error('Error resolving token or creating party:', error);
    }
  }

}
  
