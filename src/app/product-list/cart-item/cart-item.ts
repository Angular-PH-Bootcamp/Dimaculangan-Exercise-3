import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItem {
  // @Input() product!: Product;
  product = input.required<Product>();
  // @Output() addToCart = new EventEmitter<Product>();
  addToCart = output<Product>();
}
