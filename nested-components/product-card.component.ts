import { Component, booleanAttribute, input, model, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from './product.model';

/**
 * Child (nested) component.
 * - input.required<Product>() : data passed DOWN (mandatory)
 * - input(...) with transform  : optional, coerced input
 * - output<Product>()          : event sent UP
 * - model<number>()            : two-way [(quantity)] binding
 * - <ng-content>               : content projection from the parent
 */
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <article class="card" [class.featured]="featured()">
      <ng-content select="[badge]"></ng-content>
      <h3>{{ product().name }}</h3>
      <p>{{ product().price | currency }}</p>

      <div class="qty">
        <button (click)="dec()">-</button>
        <span>{{ quantity() }}</span>
        <button (click)="inc()">+</button>
      </div>

      <button class="add" (click)="addToCart.emit(product())">
        Add to cart
      </button>
    </article>
  `,
})
export class ProductCardComponent {
  // pass data DOWN
  product = input.required<Product>();
  featured = input(false, { transform: booleanAttribute });

  // two-way binding: the child owns edits to quantity
  quantity = model<number>(1);

  // send events UP
  addToCart = output<Product>();

  inc(): void {
    this.quantity.update(q => q + 1);
  }

  dec(): void {
    this.quantity.update(q => Math.max(1, q - 1));
  }
}
