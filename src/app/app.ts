import { Component, inject, signal } from '@angular/core';
import { LifecycleDemo } from './lifecycle-demo';
import { ModernLifecycleDemo } from './modern-lifecycle-demo';
import { DirectivesDemo } from './directives-demo';
import { SignalsDemo } from './signals-demo';
import { ProductCard, Product } from './product-card';
import { CartStore } from './cart-store';

// Parent component: hosts the demos and receives child events.
@Component({
  selector: 'app-root',
  imports: [LifecycleDemo, ModernLifecycleDemo, DirectivesDemo, SignalsDemo, ProductCard],
  template: `
    <h1>Angular examples — geeksarray.com</h1>

    <button (click)="productId.set(productId() + 1)">Change productId (triggers ngOnChanges)</button>
    <button (click)="showLifecycle.set(!showLifecycle())">Toggle component (triggers ngOnDestroy)</button>
    @if (showLifecycle()) {
      <app-lifecycle-demo [productId]="productId()" />
      <app-modern-lifecycle-demo [productId]="productId()" />
    }

    <app-directives-demo />

    <app-signals-demo />

    <h3>Parent ↔ child with input()/output()</h3>
    @for (p of products; track p.sku) {
      <app-product-card [product]="p" (addToCart)="onAddToCart($event)" />
    }
    <p>Cart: {{ cart.skus().join(', ') || 'empty' }} ({{ cart.count() }})</p>
  `,
})
export class App {
  readonly cart = inject(CartStore);

  readonly productId = signal(1);
  readonly showLifecycle = signal(true);

  readonly products: Product[] = [
    { sku: 'A-100', name: 'Mechanical keyboard', price: 7400, stock: 14 },
    { sku: 'B-200', name: '4K monitor', price: 27400, stock: 6 },
    { sku: 'C-300', name: 'USB-C dock', price: 12400, stock: 0 },
  ];

  onAddToCart(sku: string): void {
    this.cart.add(sku);
  }
}
