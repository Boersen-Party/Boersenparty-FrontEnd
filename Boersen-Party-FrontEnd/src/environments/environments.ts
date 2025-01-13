import keycloakConfig from './keycloak.config';

export const environment = {
  production: false,
  apiUrl: "/api",
  keycloak: keycloakConfig,
  //baseUrl: 'http://localhost:4200/',
  baseUrl: 'https://dev.stock-party.live/' // points to springboot, also add this url in the proxy config
};
