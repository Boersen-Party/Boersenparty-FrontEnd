import { Routes } from '@angular/router';
import { VeranstalterComponent } from './veranstalter/veranstalter.component';
import { UserComponent } from './user/user.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', title: 'Stock-Party', component: LandingPageComponent  },
  { path: 'veranstalter', title: 'Stock-Party', component: VeranstalterComponent},
  { path: 'user', title: 'Stock-Party', component: UserComponent},
];
