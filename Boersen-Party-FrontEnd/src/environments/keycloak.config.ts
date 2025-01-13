import {KeycloakConfig} from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'https://idp.stock-party.live',
  realm: 'stock-party',
  clientId: 'Stock-Party-Client',
};

export default keycloakConfig;
