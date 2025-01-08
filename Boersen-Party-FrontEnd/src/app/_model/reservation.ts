export interface Order {
    id?: string; 
    items: OrderItem[]; 
    totalPrice: number; 
    isPaid: boolean; 
    uuid: string;
  }
  
  export interface OrderItem {
    productId: number; 
    productName: string; 
    pricePerItem: number; 
    quantity: number; 
    totalItemPrice: number; 
  }