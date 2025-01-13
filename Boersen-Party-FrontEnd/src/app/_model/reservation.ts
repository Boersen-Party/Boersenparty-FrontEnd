export interface Order {
    id?: string; 
    items: OrderItem[]; 
    totalPrice: number; 
    paid: boolean; 
    belongs_to?: string;
  }
  
  export interface OrderItem {
    productId: number; 
    productName: string; 
    pricePerItem: number; 
    quantity: number; 
    totalItemPrice: number; 
  }