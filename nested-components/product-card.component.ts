import { Component, input, output, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from './product.model';

/**
 * Child (nested) component.
 * Receives a Product via the required signal input `product`,
 * and notifies the parent via the signal output `added`.
 */
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="card">
      <h3>{{ product().name }}</h3>
      <p>{{ finalPrice() | currency }}</p>
      @if (product().inStock) {
        <button (click)="addToCart()">Add to cart</button>
      } @else {
        <span class="muted">Out of stock</span>
      }
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ddd; border-radius: 8px; padding: 12px; }
    .muted { color: #999; }
  `],
})
export class ProductCardComponent {
  // Required signal input: the parent MUST bind a product.
  product = input.required<Product>();

  // Signal output: raised when the user adds the product.
  added = output<Product>();

  // Derived value that recomputes when the input changes.
  finalPrice = computed(() => {
    const p = this.product();
    return p.price > 100 ? p.price * 0.9 : p.price;
  });

  addToCart(): void {
    this.added.emit(this.product());
  }
}
