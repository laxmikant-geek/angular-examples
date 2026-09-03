import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import { CartService } from './cart.service';
import { Product } from './product.model';

/**
 * Parent component. It owns the data and renders one
 * <app-product-card> child per product using the new @for / @if
 * control flow. Dependencies are resolved with inject().
 */
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <h2>Products</h2>

    @if (products().length) {
      @for (p of products(); track p.id) {
        <app-product-card
          [product]="p"
          [featured]="p.id === 1"
          (addToCart)="onAddToCart($event)">
          <span badge>NEW</span>
        </app-product-card>
      }
    } @else {
      <p>No products available.</p>
    }

    <p>Items in cart: {{ cart.count() }}</p>
  `,
})
export class ProductListComponent {
  // inject() resolves the shared service; readonly so the template can bind cart.count()
  protected readonly cart = inject(CartService);

  protected products = signal<Product[]>([
    { id: 1, name: 'Keyboard', price: 49 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Monitor', price: 189 },
  ]);

  onAddToCart(product: Product): void {
    this.cart.add(product);
  }
}
