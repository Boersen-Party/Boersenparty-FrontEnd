import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qrbutton',
  standalone: true,
  imports: [],
  templateUrl: './qrbutton.component.html',
  styleUrl: './qrbutton.component.css'
})
export class QRButtonComponent {

  @Input() accessQRCodeBase64?: string | null ; 
  isQRImageShown: boolean = false;

   showQRCodeImage() {
    //console.log("qr code is: " + this.accessQRCodeBase64);
    this.isQRImageShown = true;
  }


  closeQRCodeImage() {
    this.isQRImageShown = false;
  }
}
