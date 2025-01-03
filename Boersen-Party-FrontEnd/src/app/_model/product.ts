export interface Product {
  id?: number;
  name: string;
  latestCalculatedPrice: number;
  price_min: number;
  price_max: number;
  pQuantity: number;
  imageURL?: string,
  productType:string,

}
