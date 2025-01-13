import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloak: KeycloakService) { }

  public getLoggedUser() {
    try {
      const userDetails = this.keycloak.getKeycloakInstance().idTokenParsed;

      return userDetails;
    } catch (e){
      console.error(e);
      return undefined;
    }
  }

  public isLoggedIn() : boolean {
    return this.keycloak.isLoggedIn();
  }

  public loadUserProfile() {
    return this.keycloak.loadUserProfile();
  }

  public login(){
    this.keycloak.login();
  }

  public logout(){
    this.keycloak.logout();
  }

  public getToken(){
    return this.keycloak.getToken();
  }

  public getWorksFor(): string {
    const userDetails = this.keycloak.getKeycloakInstance().idTokenParsed;
    if (userDetails && userDetails['works_for']) {
      return userDetails['works_for'];
    } else {
      return "This user is not _PERSONAL";
    }
  }

  public async addTokenToHeader(): Promise<{ [header: string]: string }> {
    const token = await this.keycloak.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
