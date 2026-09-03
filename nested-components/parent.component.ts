import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { Product } from './product.model';

/**
 * Parent (list) component.
 * Owns the product data and the cart, renders one child per
 * product with @for, passes each product down via [product],
 * and listens for the child's (added) output.
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <h2>Products</h2>
    <div class="grid">
      @for (item of products(); track item.id) {
        <app-product-card
          [product]="item"
          (added)="onAdded($event)" />
      } @empty {
        <p>No products available.</p>
      }
    </div>
    <p>Cart: {{ cart().length }} item(s)</p>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  `],
})
export class ProductListComponent {
  products = signal<Product[]>([
    { id: 1, name: 'Keyboard', price: 79, inStock: true },
    { id: 2, name: 'Mouse', price: 39, inStock: false },
    { id: 3, name: 'Monitor', price: 219, inStock: true },
  ]);

  cart = signal<Product[]>([]);

  onAdded(product: Product): void {
    this.cart.update((items) => [...items, product]);
  }
}
