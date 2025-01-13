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

  //für die input validierung


  constructor(private productService: ProductService) {
    //this.productForm = this.formService.createProductForm();
  }
  //productForm!: FormGroup;


  //@Output() ProductCreated = new EventEmitter<Product>();
  @Output() close = new EventEmitter<void>();


  //inputs
  pname: string = '';
  latestCalculatedPrice: number = 0; //at the start it works as base_price
  maxPrice: number = 0;
  minPrice: number = 0;
  quantity: number = 0;
  productType: string = '';
  //description: string = '';

  //per default ist es ein png vom "File" Symbol
  //aber dann überschrieben von product-image-selector
  selectedImageUrl: string = 'https://static.vecteezy.com/system/resources/thumbnails/014/440/983/small/image-icon-design-in-blue-circle-png.png';
  isImageSelectorInputClicked: boolean = false;

  popupMessage: string = ''; // Added for validation messages
  showPopup: boolean = false; // Added to track popup visibility

  calculateDefaultMinMaxPrices() {
    this.minPrice = this.latestCalculatedPrice * 0.5;
    this.maxPrice = this.latestCalculatedPrice * 2;
  }


  // weil add-drink-item immer child von price-entry-tab ist, braucht es einen EventEmittler
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

  //handles creating new product(POST) and updating a product (PUT)
  submitProductItem() {
    let product: Product;

    if (!this.validateInputs()) return;

    // If hideLastCalculatedPriceInput is true, it's an update (PUT request)
    if (this.hideLastCalculatedPriceInput) {
      const updatedProduct: Product = {
        id: this.product_id_for_put_request,
        name: this.pname,
        latestCalculatedPrice: this.latestCalculatedPrice, //you can send whatever price, the backend won't accept it
        price_min: this.minPrice,
        price_max: this.maxPrice,
        pQuantity: this.quantity,
        imageURL: this.selectedImageUrl,
        productType: this.productType
      };

      console.log("Updating Product:", updatedProduct);
      this.productService.updateProduct(updatedProduct);  // Call the updateProduct method from the service
    }

    else {
      // If hideLastCalculatedPriceInput is false, it's a new product (POST request)
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
      this.productService.createProduct(newProduct);  // Call the createProduct method from the service
    }

    this.hideWindow();  // Close the window after submitting
  }

  closePopup() {
    this.showPopup = false; // Close the validation popup
  }

}
