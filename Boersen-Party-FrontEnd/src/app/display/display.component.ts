import { Component, effect } from '@angular/core';
import { PartyHeaderComponent } from './party-header/party-header.component';
import { SwipeableStatsgridComponent } from './swipeable-statsgrid/swipeable-statsgrid.component';
import { PartyServiceService } from '../services/party-service.service';
import { ProductService } from '../services/products.service';
import { Party } from '../_model/party';
import { Product } from '../_model/product';

@Component({
  standalone: true,
  selector: 'app-display',
  imports: [PartyHeaderComponent, SwipeableStatsgridComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
    parties: Party[] = [];
    products: Product[] = [];

  

  constructor(private partyService: PartyServiceService, private productService: ProductService) {
    effect(() => {
      this.parties = this.partyService.parties();
      console.log("Updated parties in DisplayComponent:", this.parties);
      this.products = this.productService.products();
      console.log("Updated products in DisplayComponent:", this.products);
    });

  }


   

}
