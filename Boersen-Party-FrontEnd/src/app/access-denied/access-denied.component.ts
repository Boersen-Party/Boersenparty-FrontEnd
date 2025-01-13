import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {environment} from '../../environments/environments';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.css'
})
export class AccessDeniedComponent {
  constructor(private keycloakService: KeycloakService) {}

  logout(): void {
    const redirectUri = environment.baseUrl; // This dynamically adjusts based on environment.ts
    this.keycloakService.logout(redirectUri);
  }
}
