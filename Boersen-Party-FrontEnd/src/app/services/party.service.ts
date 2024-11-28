import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Party {
  name: string;
  start_date: string;
  end_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  private partyapi = 'http://localhost:8080/parties';

  constructor(private http: HttpClient) {}

  createParty(party: Party): Observable<any> {
    return this.http.post(this.partyapi, party);
  }

  getParty(id: string): Observable<Party> {
    return this.http.get<Party>(`${this.partyapi}/${id}`);
  }
}
