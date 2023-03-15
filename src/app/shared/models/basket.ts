import * as cuid from "cuid";

export interface BasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export interface Basket {
  id: string;
  item: BasketItem[];
}

export class Basket implements Basket {
  id = cuid();
  item: BasketItem[] = [];
}
