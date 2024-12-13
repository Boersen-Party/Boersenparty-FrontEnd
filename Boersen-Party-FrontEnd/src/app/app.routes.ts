import { Routes } from '@angular/router';
import { VeranstalterComponent } from './veranstalter/veranstalter.component';
import { UserComponent } from './user/user.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PersonalComponent} from './personal/personal.component';
import {DisplayComponent} from './display/display.component';
import {AuthGuard} from './guard/auth.guard';

export const routes: Routes = [
  { path: '', title: 'Stock-Party', component: LandingPageComponent  },
  { path: 'veranstalter', title: 'Stock-Party', component: VeranstalterComponent, canActivate: [AuthGuard]},
  { path: 'user', title: 'Stock-Party', component: UserComponent},
  { path: 'personal', title: 'Stock-Party', component: PersonalComponent, canActivate: [AuthGuard]},
  { path: 'display', title: 'Stock-Party', component: DisplayComponent},
];

