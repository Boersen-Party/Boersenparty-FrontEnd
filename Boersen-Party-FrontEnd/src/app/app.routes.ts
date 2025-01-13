import { Routes } from '@angular/router';
import { VeranstalterComponent } from './veranstalter/veranstalter.component';
import { UserComponent } from './user/user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalComponent } from './personal/personal.component';
import { DisplayComponent } from './display/display.component';
import { AuthGuard } from './services/auth.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { MenuComponent } from './user/pages/menu/menu.component';

export const routes: Routes = [
  { path: '', title: 'Stock-Party', component: LandingPageComponent },
  { path: 'veranstalter', title: 'Veranstalter-Bereich', component: VeranstalterComponent, canActivate: [AuthGuard], data: { roles: ['veranstalter'] } },
  { path: 'user', title: 'User-Bereich', children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'User Home', component: UserComponent },
      { path: 'menu', title: 'Speisekarte', component: MenuComponent },
    ]
  },
  { path: 'personal', title: 'Personal-Bereich', component: PersonalComponent, canActivate: [AuthGuard], data: { roles: ['personal'] } },
  { path: 'display', title: 'Display', component: DisplayComponent, canActivate: [AuthGuard], data: { roles: ['personal'] } },
  { path: 'access-denied', title: 'Access Denied', component: AccessDeniedComponent }
];
