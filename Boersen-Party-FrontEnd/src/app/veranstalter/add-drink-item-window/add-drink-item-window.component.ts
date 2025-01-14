import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductImageSelectorComponent } from '../product-image-selector/product-image-selector.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { Product } from '../../_model/product';
import { ProductService } from '../../services/products.service';
import {InvalidPopupComponent} from '../../invalid-popup/invalid-popup.component';

@Component({
  standalone: true,
  selector: 'app-add-drink-item-window',
  imports: [CommonModule, ProductImageSelectorComponent, FormsModule, InvalidPopupComponent],
  templateUrl: './add-drink-item-window.component.html',
  styleUrls: ['./add-drink-item-window.component.css']
})

export class AddDrinkItemWindowComponent {
  @Input() hideLastCalculatedPriceInput: boolean = false;
  @Input() product_id_for_put_request: number = 0; //wild

  constructor(private productService: ProductService) {
  }

  @Output() close = new EventEmitter<void>();

  pname: string = '';
  latestCalculatedPrice: number = 0;
  maxPrice: number = 0;
  minPrice: number = 0;
  quantity: number = 0;
  productType: string = '';

  selectedImageUrl: string = 'https://static.vecteezy.com/system/resources/thumbnails/014/440/983/small/image-icon-design-in-blue-circle-png.png';
  isImageSelectorInputClicked: boolean = false;

  popupMessage: string = '';
  showPopup: boolean = false;

  calculateDefaultMinMaxPrices() {
    this.minPrice = this.latestCalculatedPrice * 0.5;
    this.maxPrice = this.latestCalculatedPrice * 2;
  }

  hideWindow() {
    console.log("Closing AddDrinkWindow");
    this.close.emit();

  }
  toggleImageSelector() {
    console.log("toggling image selector now")
    this.isImageSelectorInputClicked = !this.isImageSelectorInputClicked;
  }
  handleImageSelection(selectedImage: string) {
    this.selectedImageUrl = selectedImage;
    this.isImageSelectorInputClicked = false;
  }
  validateInputs(): boolean {
    let message = '';
    if (!this.pname.trim()) message += 'Product name is required. \n';
    if (this.latestCalculatedPrice <= 0) message += 'Base price must be greater than 0. \n';
    if (this.quantity <= 0) message += 'Quantity must be greater than 0. \n';

    if (message) {
      this.popupMessage = message;
      this.showPopup = true;
      return false;
    }
    return true;
  }
  submitProductItem() {
    let product: Product;

    if (!this.validateInputs()) return;

    if (this.hideLastCalculatedPriceInput) {
      const updatedProduct: Product = {
        id: this.product_id_for_put_request,
        name: this.pname,
        latestCalculatedPrice: this.latestCalculatedPrice,
        price_min: this.minPrice,
        price_max: this.maxPrice,
        pQuantity: this.quantity,
        imageURL: this.selectedImageUrl,
        productType: this.productType
      };

      console.log("Updating Product:", updatedProduct);
      this.productService.updateProduct(updatedProduct);
    }

    else {
      const newProduct: Product = {
        name: this.pname,
        latestCalculatedPrice: this.latestCalculatedPrice,
        price_min: this.minPrice,
        price_max: this.maxPrice,
        pQuantity: this.quantity,
        imageURL: this.selectedImageUrl,
        productType: this.productType
      };

      console.log("Submitting New Product:", newProduct);
      this.productService.createProduct(newProduct);
    }

    this.hideWindow();
  }
  closePopup() {
    this.showPopup = false;
  }

}
