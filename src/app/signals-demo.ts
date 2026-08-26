import { Component, computed, effect, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartStore } from './cart-store';
import { QuantityPicker } from './quantity-picker';

// Signals end to end: writable state, derived values with computed(), a two-way
// model() child, an effect() for side effects, and a service holding shared state.
@Component({
  selector: 'app-signals-demo',
  imports: [CurrencyPipe, QuantityPicker],
  template: `
    <div class="card">
      <h3>Signals: state, derived values, and an order total</h3>

      <p>
        Unit price: {{ unitPrice() | currency: 'INR' }} ·
        Quantity: <app-quantity-picker [(quantity)]="quantity" />
      </p>

      <ul>
        <li>Subtotal: {{ subtotal() | currency: 'INR' }}</li>
        <li>GST (18%): {{ gst() | currency: 'INR' }}</li>
        <li><strong>Total: {{ total() | currency: 'INR' }}</strong></li>
      </ul>

      <p>Cart holds {{ cart.count() }} item(s).</p>
      <button type="button" (click)="cart.add('A-100')">Add keyboard to cart</button>
      <button type="button" (click)="cart.clear()" [disabled]="cart.isEmpty()">Clear cart</button>
    </div>
  `,
})
export class SignalsDemo {
  readonly cart = inject(CartStore);

  // Writable state.
  readonly unitPrice = signal(7400);
  readonly quantity = signal(1);

  // Derived state — recomputed only when what they read actually changes.
  readonly subtotal = computed(() => this.unitPrice() * this.quantity());
  readonly gst = computed(() => Math.round(this.subtotal() * 0.18));
  readonly total = computed(() => this.subtotal() + this.gst());

  constructor() {
    // Effects are for side effects (logging, analytics, storage) — never for
    // deriving values, which is what computed() is for.
    effect(() => console.log(`[signals-demo] total is now ₹${this.total()}`));
  }
}
