import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule,provideAnimations } from '@angular/platform-browser'; // add provideAnimations
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { KeycloakAngularModule } from 'keycloak-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Konflikte mit Angular 18

import { routes } from './app.routes';

import { KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/keycloak-init.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      MatSnackBarModule,
      KeycloakAngularModule,
      NgbModule
    ),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true,
    },
  ],
};
