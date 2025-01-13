import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {environment} from '../../environments/environments';

@Component({
  selector: 'app-logout-btn',
  standalone: true,
  imports: [],
  templateUrl: './logout-btn.component.html',
  styleUrl: './logout-btn.component.css'
})
export class LogoutBtnComponent {
  constructor(private keycloakService: KeycloakService) {}

  logout(): void {
    const redirectUri = environment.baseUrl; // This dynamically adjusts based on environment.ts
    this.keycloakService.logout(redirectUri);
  }

}
