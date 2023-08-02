import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearItems(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
