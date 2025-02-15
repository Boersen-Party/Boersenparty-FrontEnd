import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';

// Services
import { initializer } from './services/keycloak-init';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { CommonService } from './services/common.service';

// Routes
import { routes } from './app.routes';

console.log('Routes:', routes);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // HTTP client
    provideRouter(routes, withComponentInputBinding()), // Routes

    // Keycloak initialization using APP_INITIALIZER
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },

    // Register services
    KeycloakService,
    AuthService,
    AuthGuard,
    CommonService,
  ],
};
