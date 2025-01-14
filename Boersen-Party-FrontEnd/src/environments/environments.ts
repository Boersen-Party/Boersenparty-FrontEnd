import keycloakConfig from './keycloak.config';

export const environment = {
  production: false,
  apiUrl: "/api",
  keycloak: keycloakConfig,
  //baseUrl: 'http://localhost:4200/',
  baseUrl: 'https://stock-party.live/'
};
