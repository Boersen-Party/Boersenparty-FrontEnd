import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // Check if the user is authenticated
    if (!this.authenticated) {
      const redirectUri =
        typeof window !== 'undefined'
          ? window.location.origin + state.url
          : '';

      await this.keycloak.login({ redirectUri });
    }

    // Extract required roles from route data
    const requiredRoles = route.data['roles'];

    // Allow access if no roles are required
    if (!requiredRoles || !(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Debugging: Log current roles and required roles
    console.log('Authenticated:', this.authenticated);
    console.log('User Roles:', this.roles);
    console.log('Required Roles:', requiredRoles);

    // Check if the user has at least one of the required roles
    const hasRequiredRole = requiredRoles.some((role) => this.roles.includes(role));
    if (hasRequiredRole) {
      return true;
    }

    // Redirect to "access-denied" page if user lacks roles
    this.router.navigate(['access-denied']);
    return false;
  }
}
