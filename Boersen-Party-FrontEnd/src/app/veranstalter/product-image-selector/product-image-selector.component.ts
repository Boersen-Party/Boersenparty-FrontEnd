import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-product-image-selector',
  imports: [CommonModule],
  templateUrl: './product-image-selector.component.html',
  styleUrl: './product-image-selector.component.css'
})
export class ProductImageSelectorComponent {
  @Output() imageSelected = new EventEmitter<string>();

  selectedImage: string = '';
  isImageSelectorVisible: boolean = true;

  imageUrls: string[] = [
    'https://cdn-icons-png.flaticon.com/512/1178/1178890.png',
    'https://cdn-icons-png.flaticon.com/512/988/988934.png',
    'https://cdn-icons-png.flaticon.com/512/1425/1425548.png',
    'https://cdn-icons-png.flaticon.com/512/2331/2331996.png',
    'https://cdn-icons-png.flaticon.com/128/1404/1404945.png',
    'https://cdn-icons-png.flaticon.com/128/5787/5787016.png',
    'https://cdn-icons-png.flaticon.com/128/590/590717.png',
    'https://cdn-icons-png.flaticon.com/128/7511/7511906.png',
    'https://cdn-icons-png.flaticon.com/128/3174/3174535.png',
    'https://cdn-icons-png.flaticon.com/128/920/920564.png',
    'https://cdn-icons-png.flaticon.com/128/3329/3329302.png',
    'https://cdn-icons-png.flaticon.com/128/920/920562.png',
    'https://cdn-icons-png.flaticon.com/128/1046/1046782.png',
    'https://cdn-icons-png.flaticon.com/128/4265/4265446.png'
  ];


  selectImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }


  confirmImageSelection() {
    this.imageSelected.emit(this.selectedImage);
    this.closeImageSelector();
}

closeImageSelector(): void {
  this.isImageSelectorVisible = !this.isImageSelectorVisible;
}

}
