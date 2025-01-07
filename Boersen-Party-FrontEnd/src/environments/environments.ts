import keycloakConfig from './keycloak.config';

export const environment = {
  production: false,
  apiUrl: "/api",
  keycloak: keycloakConfig,
  baseUrl: 'http://localhost:4200/veranstalter',
  //baseUrl: 'https://api.dev.stock-party.live/' // points to springboot, also add this url in the proxy config
};
