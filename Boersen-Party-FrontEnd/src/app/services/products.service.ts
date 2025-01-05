import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../_model/product';
import { AuthService } from './auth.service';
import { PartyServiceService } from './party-service.service';
import { baseURL } from '../_config/config';
import axios from 'axios';
import { timer } from 'rxjs';
import { CircularBuffer } from '../_datastructure/CircularBuffer';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  timer = timer(0, 3000);
  products = signal<Product[]>([]);
  latestPriceBuffers = signal<Map<number, CircularBuffer<{ timestamp: string | undefined, price: number }>>>(new Map());


  constructor(private authService: AuthService, private partyService: PartyServiceService) {
    this.timer.subscribe(() => {
      this.fetchProducts();
      this.updateLatestPriceBuffers();
    });
  }


  updateLatestPriceBuffers(): void {
    const currentBuffers = this.latestPriceBuffers();
    const updatedBuffers = new Map(currentBuffers);

    this.products().forEach(product => {
      const productId = product.id;
      const timestamp = product.PriceUpdatedAt;
      const price = product.latestCalculatedPrice;

      if (productId === undefined) {
        console.warn("Product without ID detected. Skipping buffer update:", product);
        return;
      }

      //buffer per Produkt
      if (!updatedBuffers.has(productId)) {
        updatedBuffers.set(productId, new CircularBuffer(10));
      }

      const buffer = updatedBuffers.get(productId)!;
      buffer.add({ timestamp, price });
    });

    this.latestPriceBuffers.set(updatedBuffers);
    console.log("Updated latestPriceBuffers in service:", updatedBuffers);
  }

  

  


  async fetchProducts() {
    //console.log("fetchProducts() called");
    const headers = await this.authService.addTokenToHeader();


    const partyId = this.partyService.activePartyId();
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
        //console.log("fetched products is:");
        //console.log(fetchedProducts);
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
      const partyId = this.partyService.activePartyId();
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

async deleteProduct(productId: number) {
  try {
    const headers = await this.authService.addTokenToHeader();
    const partyId = this.partyService.activePartyId();
    if (partyId === null) {
      console.error('Cannot delete product: No active Party ID.');
      return;
    }

    const url = `${baseURL}/${partyId}/products/${productId}`;
    console.log("deleteProduct calls url:", url);

    axios.delete(url, { headers: headers, withCredentials: true })
      .then((response) => {
        console.log('Response from backend:', response.data);

        // do i need this?
         // this.products.update((products) => products.filter(product => product.id !== productId));
         
      })
      .catch((error: any) => {
        console.error('Error deleting product:', error.response ? error.response.data : error);
      });
  } catch (error) {
    console.error('Error resolving token or deleting product:', error);
  }
}

async updateProduct(updatedProduct: Product) {
  try {
    const headers = await this.authService.addTokenToHeader();
    const partyId = this.partyService.activePartyId();
    if (partyId === null) {
      console.error('Cannot update product: No active Party ID.');
      return;
    }

    // Ensure product ID is present for update
    if (!updatedProduct.id) {
      console.error('Cannot update product: No product ID provided.');
      return;
    }

    let url = `${baseURL}/${partyId}/products/${updatedProduct.id}`; // Update URL with product ID
    console.log("updateProduct calls url:", url);

    axios
      .put(url, updatedProduct, {
        headers: headers, // application/json
      })
      .then((response) => {
        const updatedProductResponse = response.data;
        console.log('Product updated:', updatedProductResponse);

        // Update the products signal after the product is updated
        this.products.update((products) => {
          // Replace the old product with the updated product
          return products.map(product => 
            product.id === updatedProduct.id ? updatedProductResponse : product
          );
        });
      })
      .catch((error: any) => {
        console.error('Error updating product:', error);
      });
  } catch (error) {
    console.error('Error resolving token or updating product:', error);
  }
}


  

}
