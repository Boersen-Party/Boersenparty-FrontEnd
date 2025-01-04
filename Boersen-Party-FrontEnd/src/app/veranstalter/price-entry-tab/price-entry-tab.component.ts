import { Component, effect, Input } from '@angular/core';
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
  @Input() hideButton: boolean = false; // in personal view, the create product button is hidden
  products: Product[] = [];
  showAddDrinkWindow: boolean = false;
  showEditDrinkWindowForAdjustment: boolean = false;
  selectedProductId: number = 0;
  

   constructor(private productService: ProductService) {
  
  
      effect(() => {
        this.products = this.productService.products();
        console.log("effect called in PriceEntryTabComponent!");
      });
  
    }
  
    DeleteProduct(productId: number): void {
      if (productId === 0) {
        throw new Error("PriceEntryTab: Invalid product ID: 0. This indicates a missing or uninitialized product.");
      }
        this.productService.deleteProduct(productId); 
        //maybe have to filter the product from the local list, idk
    }
  
  
  onClickForAdjust(productId: number): void {
    if (productId === 0) {
      throw new Error("PriceEntryTab- onClickForAdjust: Invalid product ID: 0. This indicates a missing or uninitialized product.");
    }
    this.selectedProductId = productId;
    this.showEditDrinkWindowForAdjustment = !this.showEditDrinkWindowForAdjustment;

  }
  

  onClick() {
    console.log("Button clicked!");
    this.showAddDrinkWindow = !this.showAddDrinkWindow;
  }

  closeWindow() {
    this.showAddDrinkWindow = false;
    this.showEditDrinkWindowForAdjustment = false;
  }
}
