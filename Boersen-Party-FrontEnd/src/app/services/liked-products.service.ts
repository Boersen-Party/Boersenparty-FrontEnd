import { Injectable } from '@angular/core';
import Cookies from 'js-cookie'; // Correct import for js-cookie

@Injectable({
  providedIn: 'root'
})
export class LikedProductsService {

  private pinnedProductCookieName = 'pinnedProducts'; // Name of the cookie

  constructor() {}

  getPinnedProductIds(): number[] {
    const pinnedProducts = Cookies.get(this.pinnedProductCookieName);
    return pinnedProducts ? JSON.parse(pinnedProducts) : []; // Parse the cookie value if it exists
  }

  isProductPinned(productId: number): boolean {
    const pinnedProductIds = this.getPinnedProductIds();
    return pinnedProductIds.includes(productId);
  }

  addPinnedProduct(productId: number): void {
    const pinnedProductIds = this.getPinnedProductIds();
    if (!pinnedProductIds.includes(productId)) {
      pinnedProductIds.push(productId); // Add product ID to the list
      Cookies.set(this.pinnedProductCookieName, JSON.stringify(pinnedProductIds), { expires: 365 }); // Set cookie with 1-year expiration
    }
  }

  removePinnedProduct(productId: number): void {
    let pinnedProductIds = this.getPinnedProductIds();
    pinnedProductIds = pinnedProductIds.filter(id => id !== productId); // Remove product ID
    Cookies.set(this.pinnedProductCookieName, JSON.stringify(pinnedProductIds), { expires: 365 }); // Set cookie with 1-year expiration
  }
}
