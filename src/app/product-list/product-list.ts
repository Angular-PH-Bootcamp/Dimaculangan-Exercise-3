import { Component, signal } from '@angular/core';
import { CartItem } from './cart-item/cart-item';
import { PRODUCTS } from './products';

@Component({
  selector: 'product-list',
  imports: [CartItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products = signal(PRODUCTS);

  cart = signal<{ id: number; name: string; price: number }[]>([]);

  handleAdd(product: { id: number; name: string; price: number }) {
    this.cart.update((cart) => [...cart, product]);
    console.log('Cart updated:', this.cart());
  }

  getTotalCost(): number {
    return this.cart().reduce((sum, p) => sum + p.price, 0);
  }
}
