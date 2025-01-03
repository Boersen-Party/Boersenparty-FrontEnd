import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../_model/product';
import { AuthService } from './auth.service';
import { PartyServiceService } from './party-service.service';
import { baseURL } from '../_config/config';
import axios from 'axios';
import { timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  timer = timer(0, 10000);
  products = signal<Product[]>([]);
  prices = signal<Map<number, number>>(new Map()); // Maps product ID to its latest price

  constructor(private authService: AuthService, private partyService: PartyServiceService) {
    this.timer.subscribe(() => {
      this.fetchProducts();
    });
  }

  get activePartyId(): Signal<number | null> {
    return computed(() => {
      const parties = this.partyService.parties();
      return parties.length > 0 && parties[0]?.id !== undefined ? parties[0].id : null;
    });
  }




  async fetchLatestPrices(productId: number) {
    try {
      const headers = await this.authService.addTokenToHeader();
  
      const url = `http://localhost:8080/price-update/${productId}`;
      console.log('Calling URL for fetchLatestPrices:', url);
  
      // Fetch the latest price for the specified product
      const response = await axios.get(url, { headers });
      const latestPrice = response.data; // Expecting a single number
      console.log(`Fetched latest price for product ${productId}:`, latestPrice);
  
      // Update the `price_base` for the specific product
      this.products.update((currentProducts) =>
        currentProducts.map((product) =>
          product.id === productId
            ? { ...product, price_base: latestPrice } // Update the price_base
            : product // Return unchanged product
        )
      );
  
      console.log('Updated products:', this.products());
    } catch (error) {
      console.error(`Error fetching latest price for product ${productId}:`, error);
    }
  }
  


  async fetchProducts() {
    console.log("fetchProducts() called");
    const headers = await this.authService.addTokenToHeader();


    const partyId = this.activePartyId();
    if (partyId === null) {
    console.warn('Cannot fetch products: No active Party ID.');
    return; 
  }
    let url = baseURL + '/' + partyId + '/products';

    axios.get(url, {
      headers:headers,
    })
      .then(response => {
        
        const fetchedProducts = response.data;
        console.log("fetched products is:");
        console.log(fetchedProducts);
        try {
          this.products.set(fetchedProducts);
        } catch (error) {
          console.error("Error while setting parties:", error); 
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);

      });
  }

   

  async createProduct(newProduct: Product) {
    
    try {
      const headers = await this.authService.addTokenToHeader();
      const partyId = this.activePartyId();
      if (partyId === null) {
      console.error('Cannot create product: No active Party ID.');
      return; 
    
    }
      
    let url = baseURL + '/' + partyId + '/products';
      console.log("createproduct calls url:", url);

      axios
        .post(url , newProduct, {
          headers: headers, // application/json
        })
        .then((response) => {
          const createdProduct = response.data;
          console.log('product created:', createdProduct);

          this.products.update((products) => [...products, createdProduct]);
        })
        .catch((error: any) => {
          console.error('Error adding product:', error);
        });
    } catch (error) {
      console.error('Error resolving token or creating product:', error);
    }
  }

}
