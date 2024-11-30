import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Boersen-Party';
}
