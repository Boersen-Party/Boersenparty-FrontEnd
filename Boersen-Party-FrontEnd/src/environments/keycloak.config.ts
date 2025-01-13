import {KeycloakConfig} from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'https://idp.stock-party.live',
  realm: 'stock-party',
  clientId: 'stock-party-client',
};

export default keycloakConfig;
