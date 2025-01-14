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
    if (!this.authenticated) {
      const redirectUri = typeof window !== 'undefined'? window.location.origin + state.url : '';

      await this.keycloak.login({ redirectUri });
    }

    const requiredRoles = route.data['roles'];

    if (!requiredRoles || !(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    console.log('Authenticated:', this.authenticated);
    console.log('User Roles:', this.roles);
    console.log('Required Roles:', requiredRoles);

    const hasRequiredRole = requiredRoles.some((role) => this.roles.includes(role));
    if (hasRequiredRole) {
      return true;
    }

    this.router.navigate(['access-denied']);
    return false;
  }
}
