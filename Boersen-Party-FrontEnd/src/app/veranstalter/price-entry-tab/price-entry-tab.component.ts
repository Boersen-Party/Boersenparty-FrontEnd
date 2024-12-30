import { Component, effect } from '@angular/core';
import {AddDrinkItemWindowComponent} from '../add-drink-item-window/add-drink-item-window.component';
import { Product } from '../../_model/product';
import { ProductService } from '../../services/products.service';

@Component({
  standalone: true,
  selector: 'app-price-entry-tab',
  imports: [AddDrinkItemWindowComponent],
  templateUrl: './price-entry-tab.component.html',
  styleUrl: './price-entry-tab.component.css'
})
export class PriceEntryTabComponent {

  //this array will be populated by the input window
  products: Product[] = [];


   constructor(private productService: ProductService) {
  
  
      effect(() => {
        this.products = this.productService.products();
        console.log("effect called in PriceEntryTabComponent!");
      });
  
    }
  
  RecieveProductFromInputWindow(product: Product) {
    console.log("Received Product:", product);
    //this.products.push(product);
  }

  showAddDrinkWindow: boolean = false;

  onClick() {
    console.log("Button clicked!");
    this.showAddDrinkWindow = !this.showAddDrinkWindow;
  }

  closeWindow() {
    this.showAddDrinkWindow = false;
  }
}
