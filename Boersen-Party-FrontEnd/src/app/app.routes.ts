import { Routes } from '@angular/router';
import { VeranstalterComponent } from './veranstalter/veranstalter.component';
import { UserComponent } from './user/user.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PersonalComponent} from './personal/personal.component';
import {DisplayComponent} from './display/display.component';
import {AdminComponent} from './admin/admin.component';

export const routes: Routes = [
  { path: '', title: 'Stock-Party', component: LandingPageComponent  },
  { path: 'veranstalter', title: 'Stock-Party', component: VeranstalterComponent},
  { path: 'user', title: 'Stock-Party', component: UserComponent},
  { path: 'personal', title: 'Stock-Party', component: PersonalComponent},
  { path: 'display', title: 'Stock-Party', component: DisplayComponent},
  { path: 'admin', title: 'Stock-Party', component: AdminComponent},
];

