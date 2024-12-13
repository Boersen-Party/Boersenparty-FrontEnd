import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://idp.stock-party.live/admin/stock-party/console/',
        realm: 'stock-party',
        clientId: 'frontend-client-dev',
      }
    });
}
