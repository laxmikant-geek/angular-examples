import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface Product { sku: string; name: string; price: number; stock: number; }

// Child component: data in via input(), events out via output() —
// the signal-based successors of @Input()/@Output().
@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  template: `
    <div class="card">
      <h4>{{ product().name }}</h4>
      <p>{{ product().price | currency:'INR' }}</p>
      <p>{{ product().stock }} in stock</p>
      <button [disabled]="product().stock === 0" (click)="addToCart.emit(product().sku)">
        Add to cart
      </button>
    </div>
  `,
})
export class ProductCard {
  readonly product = input.required<Product>();     // parent -> child
  readonly addToCart = output<string>();            // child  -> parent
}
