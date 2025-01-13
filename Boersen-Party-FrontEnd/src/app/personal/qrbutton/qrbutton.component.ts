import { Component, Input, OnInit } from '@angular/core';
import { PartyServiceService } from '../../services/party-service.service';

@Component({
  selector: 'app-qrbutton',
  standalone: true,
  imports: [],
  templateUrl: './qrbutton.component.html',
  styleUrl: './qrbutton.component.css'
})
export class QRButtonComponent implements OnInit {
  QRCodeBase64?: string | null;
  isQRImageShown: boolean = false;

  constructor(private partyService: PartyServiceService){  }

  ngOnInit() {
    setTimeout(() => {
      if (this.partyService.getActivePartyId()) {
        this.loadQRCode();
      } else {
        console.log("activePartyId is still not available");
      }
    }, 1000);
  }

   async loadQRCode() {
    try {
      this.QRCodeBase64 = await this.partyService.getQRCodeBase64();
    } catch (error) {
      console.error('Error loading QR code:', error);
    }
  }

   showQRCodeImage() {
    this.isQRImageShown = true;
  }


  closeQRCodeImage() {
    this.isQRImageShown = false;
  }
}
