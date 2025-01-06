import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

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
    const keycloakLogoutUrl = `http://localhost:4200/verantstalter`; //https://idp.stock-party.live/realms/stock-party/protocol/openid-connect/auth
    this.keycloakService.logout(keycloakLogoutUrl);
  }

}
