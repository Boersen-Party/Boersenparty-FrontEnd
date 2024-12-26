import { Routes } from '@angular/router';
import { VeranstalterComponent } from './veranstalter/veranstalter.component';
import { UserComponent } from './user/user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalComponent } from './personal/personal.component';
import { DisplayComponent } from './display/display.component';
//import { FavoritesComponent } from './user/pages/favorites/favorites.component';
//import { MenuComponent } from './user/pages/menu/menu.component';
import { AuthGuard } from './services/auth.guard';
import {AccessDeniedComponent} from './access-denied/access-denied.component';

export const routes: Routes = [
  { path: '', title: 'Stock-Party', component: LandingPageComponent  },
  { path: 'veranstalter', title: 'Stock-Party', component: VeranstalterComponent}, //add canActivate: [AuthGuard], data: { roles: ['veranstalter'] }
  { path: 'user',
    title: 'Stock-Party',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', title: 'Home', component: UserComponent },
      //{ path: 'menu', title: 'Speisekarte', component: MenuComponent},
      //{ path: 'favorites', title: 'Favourites', component: FavoritesComponent},
    ]
  },
  { path: 'personal', title: 'Stock-Party', component: PersonalComponent}, // add canActivate: [AuthGuard], data: { roles: ['personal'] }},
  { path: 'display', title: 'Stock-Party', component: DisplayComponent},
  { path: 'access-denied', component : AccessDeniedComponent}
];
