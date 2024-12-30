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
  timer = timer(0, 3000);
  products = signal<Product[]>([]);

  constructor(private authService: AuthService, private partyService: PartyServiceService) {

    //subscribe to products
    this.timer.subscribe(_ => {
      //console.log("timer subscribed.. fetching PRODUCTS now..");
      this.fetchProducts();
    
    })
  }

  get activePartyId(): Signal<number | null> {
    return computed(() => {
      const parties = this.partyService.parties();
      return parties.length > 0 && parties[0]?.id !== undefined ? parties[0].id : null;
    });
  }

  async fetchProducts() {
    console.log("fetchProducts() called");
    const headers = await this.authService.addTokenToHeader();


    const partyId = this.activePartyId();
    if (partyId === null) {
    console.error('Cannot fetch products: No active Party ID.');
    return; 
  }
    let url = baseURL + '/' + partyId + '/products';
    console.log("calling url for fetchproducts:", url);

    axios.get(url, {
      headers:headers,
    })
      .then(response => {
        console.log("fetchProducts() response =");
        console.log(response);

        const fetchedProducts = response.data;
        console.log("fetched products is:");
        console.log(fetchedProducts);

        try {
          this.products.set(fetchedProducts);
        } catch (error) {
          console.error("Error while setting parties:", error);
          console.error("Error while setting parties:", error);
          console.error("Error while setting parties:", error);
          console.error("Error while setting parties:!!!!!!!!!!!!!!!!!!", error);
          //this.parties.set([]); // Fallback for an error in setting parties
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);

      });


  }

   

  async createProduct(newProduct: Product) {
    
    try {
      const headers = await this.authService.addTokenToHeader();
      //console.log('Headers with token:', headers);


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
