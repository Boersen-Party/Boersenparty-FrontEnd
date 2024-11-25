import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceOverviewComponent } from './price-overview/price-overview.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PriceOverviewComponent],

  template: `
    <div class= "main-grid">
      <!--Grid for Price Overview Element-->
      <div class="price-overview-position">
        <section>
          <app-price-overview/>
        </section>
      </div>
      <!-- End of Grid-->

      <!--Grid-->
      <div class="second-grid">

        <div class="night-mode-box">
          <h1>Night Mode</h1>
        </div>

        <div class="statistic-box">
            <h1>Statistic Box</h1>
        </div>

        <div class="favorite-box">
          <h1>Favorite Box</h1>
        </div>

        <div class="type-box">
          <h1>Type Box</h1>
          <p><br><br><br><br></p>
        </div>

      </div>
      <!-- End of Grid-->

    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Boersen-Party';
}
