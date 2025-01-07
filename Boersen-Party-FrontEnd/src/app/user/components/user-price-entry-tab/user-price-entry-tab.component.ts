import { Component, effect } from '@angular/core';
import { Product } from '../../../_model/product';
import { ProductService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-price-entry-tab',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-price-entry-tab.component.html',
  styleUrl: './user-price-entry-tab.component.css'
})
export class UserPriceEntryTabComponent {
  selectedProduct: any = null;
  orderQuantity: number = 1;

    products: Product[] = [];
    
    
    
  
     constructor(private productService: ProductService) {
    
    
        effect(() => {
          this.products = this.productService.products();
        });
    
      }

      

  openOrderPopup(product: any) {
    this.selectedProduct = product;
  }

  closePopup() {
    this.selectedProduct = null;
    this.orderQuantity = 1; // Reset quantity
  }

  addToOrder() {
    // Logic to add the product to the order
    console.log(
      `Added ${this.orderQuantity} of ${this.selectedProduct.name} to the order.`
    );
    this.closePopup();
  }
}
