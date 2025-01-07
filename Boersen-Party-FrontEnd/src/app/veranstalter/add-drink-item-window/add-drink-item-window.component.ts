import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductImageSelectorComponent } from '../product-image-selector/product-image-selector.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { Product } from '../../_model/product';
import {InvalidPopupComponent} from '../invalid-popup/invalid-popup.component';

@Component({
  standalone: true,
  selector: 'app-add-drink-item-window',
  imports: [CommonModule, ProductImageSelectorComponent, FormsModule, InvalidPopupComponent],
  templateUrl: './add-drink-item-window.component.html',
  styleUrls: ['./add-drink-item-window.component.css']
})

export class AddDrinkItemWindowComponent {

  //für die input validierung

  /*
  constructor(private formService: FormService) {
    this.productForm = this.formService.createProductForm();
  }
  productForm!: FormGroup;

  */
  @Output() ProductCreated = new EventEmitter<Product>();
  @Output() close = new EventEmitter<void>();


  //inputs
  pname: string = '';
  basePrice: number = 0;
  maxPrice: number = 0;
  minPrice: number = 0;
  quantity: number = 0;
  productType: string = '';
  description: string = '';

  //per default ist es ein png vom "File" Symbol
  //aber dann überschrieben von product-image-selector
  selectedImageUrl: string = 'https://static.vecteezy.com/system/resources/thumbnails/014/440/983/small/image-icon-design-in-blue-circle-png.png';
  isImageSelectorInputClicked: boolean = false;

  popupMessage: string = ''; // Added for validation messages
  showPopup: boolean = false; // Added to track popup visibility

  calculateMinMaxPrices() {
    this.minPrice = this.basePrice * 0.5;
    this.maxPrice = this.basePrice * 2;
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
    if (this.basePrice <= 0) message += 'Base price must be greater than 0. \n';
    if (this.quantity <= 0) message += 'Quantity must be greater than 0. \n';

    if (message) {
      this.popupMessage = message;
      this.showPopup = true;
      return false;
    }
    return true;
  }

  submitProductItem() {
    // submit a drink entry
    console.log("Button clicked!");

    if (!this.validateInputs()) return; // Show popup and stop if inputs are invalid

    const newProduct: Product = {
      name: this.pname,
      baseprice: this.basePrice,
      minprice: this.minPrice,
      maxprice: this.maxPrice,
      quantity: this.quantity,
      imageurl: this.selectedImageUrl,
      description: this.description,
    };

    console.log("Submitted Product:", newProduct);
    this.ProductCreated.emit(newProduct);
    this.hideWindow();
  }

  closePopup() {
    this.showPopup = false; // Close the validation popup
  }

}

