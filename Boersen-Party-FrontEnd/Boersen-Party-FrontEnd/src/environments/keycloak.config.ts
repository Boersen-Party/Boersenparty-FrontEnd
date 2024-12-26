import {KeycloakConfig} from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'https://idp.stock-party.live/admin/stock-party/console/',
  realm: 'stock-party',
  clientId: 'frontend-client-dev',
};

export default keycloakConfig;
