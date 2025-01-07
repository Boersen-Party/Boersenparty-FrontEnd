export interface Reservation {
    id?: string; 
    items: ReservationItem[]; 
    totalPrice: number; 
    isPaid: boolean; 
    user_uuid: string;
  }
  
  export interface ReservationItem {
    productId: number; 
    productName: string; 
    pricePerItem: number; 
    quantity: number; 
    totalItemPrice: number; 
  }