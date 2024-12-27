import { KeycloakOptions, KeycloakService } from "keycloak-angular";
import { environment } from '../../environments/environments';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {
  const options: KeycloakOptions = {
    config: environment.keycloak,
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'login-required',
      flow: 'standard',
      checkLoginIframe: false,
    },
    bearerExcludedUrls: [],
  };

  return () => keycloak.init(options);
}
