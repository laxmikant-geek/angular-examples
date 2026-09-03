import { Component, signal, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  template: `
    <h2>Products ({{ count() }})</h2>
    @if (products().length > 0) {
      <ul>
        @for (p of products(); track p.id) {
          <li>{{ p.name }} — {{ p.price | currency }}</li>
        }
      </ul>
    } @else {
      <p>No products yet.</p>
    }
    <p>Total: {{ total() | currency }}</p>
    <button (click)="addSample()">Add product</button>
  `,
})
export class ProductList {
  products = signal<Product[]>([
    { id: 1, name: 'Keyboard', price: 49 },
    { id: 2, name: 'Mouse', price: 25 },
  ]);

  count = computed(() => this.products().length);
  total = computed(() =>
    this.products().reduce((sum, p) => sum + p.price, 0),
  );

  addSample(): void {
    this.products.update((list) => [
      ...list,
      { id: list.length + 1, name: 'New item', price: 10 },
    ]);
  }
}
