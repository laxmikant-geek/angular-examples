import { Component, model } from '@angular/core';

// model() creates a paired input + output, so the parent can two-way bind with
// [(quantity)] — the modern replacement for @Input() x + @Output() xChange.
@Component({
  selector: 'app-quantity-picker',
  template: `
    <span class="qty">
      <button type="button" (click)="dec()" [disabled]="quantity() <= min">−</button>
      <strong>{{ quantity() }}</strong>
      <button type="button" (click)="inc()" [disabled]="quantity() >= max">+</button>
    </span>
  `,
})
export class QuantityPicker {
  readonly quantity = model.required<number>();

  readonly min = 1;
  readonly max = 10;

  inc(): void {
    this.quantity.update(q => Math.min(q + 1, this.max));
  }

  dec(): void {
    this.quantity.update(q => Math.max(q - 1, this.min));
  }
}
