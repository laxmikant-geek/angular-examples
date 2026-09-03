import { Injectable, signal } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<Product[]>([]);

  // reactive count the templates can read directly
  readonly count = () => this.items().length;

  add(product: Product): void {
    this.items.update(list => [...list, product]);
  }
}
