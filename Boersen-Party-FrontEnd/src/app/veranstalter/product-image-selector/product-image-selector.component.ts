import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-product-image-selector',
  imports: [CommonModule],
  templateUrl: './product-image-selector.component.html',
  styleUrl: './product-image-selector.component.css'
})
export class ProductImageSelectorComponent {


  confirmImageSelection() {
    console.log("lmao");
  
}

  selectedImage: string = '';
  isPopupVisible: boolean = true;

  imageUrls: string[] = [
    'https://cdn-icons-png.flaticon.com/512/1178/1178890.png',
    'https://cdn-icons-png.flaticon.com/512/988/988934.png',
    'https://cdn-icons-png.flaticon.com/512/1425/1425548.png',
    'https://cdn-icons-png.flaticon.com/512/2331/2331996.png'
  ];


  selectImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
    this.isPopupVisible = false;
  }

  closeImageSelector(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

}
