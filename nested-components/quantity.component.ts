import { Component, model } from '@angular/core';

/**
 * Two-way binding with model().
 * `qty` is a writable signal the parent binds with [(qty)]="...".
 * A model() is an input() + a matching qtyChange output() wired together.
 */
@Component({
  selector: 'app-quantity',
  standalone: true,
  template: `
    <button (click)="dec()">-</button>
    <span>{{ qty() }}</span>
    <button (click)="inc()">+</button>
  `,
})
export class QuantityComponent {
  qty = model<number>(1);

  inc(): void { this.qty.update((n) => n + 1); }
  dec(): void { this.qty.update((n) => Math.max(1, n - 1)); }
}
