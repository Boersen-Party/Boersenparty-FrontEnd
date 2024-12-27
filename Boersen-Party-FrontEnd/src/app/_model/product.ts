export interface Product {
  id?: number;
  name: string;
  baseprice: number;
  minprice: number;
  maxprice: number;
  quantity: number;
  imageurl?: string,
  description?: string,
}
