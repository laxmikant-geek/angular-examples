import { Injectable, computed, signal } from '@angular/core';

// Shared state as a signal-holding service: any component at any depth injects this
// instead of tunnelling inputs through uninvolved middle components.
@Injectable({ providedIn: 'root' })
export class CartStore {
  private readonly items = signal<string[]>([]);

  readonly skus = this.items.asReadonly();
  readonly count = computed(() => this.items().length);
  readonly isEmpty = computed(() => this.items().length === 0);

  add(sku: string): void {
    this.items.update(list => (list.includes(sku) ? list : [...list, sku]));
  }

  remove(sku: string): void {
    this.items.update(list => list.filter(s => s !== sku));
  }

  clear(): void {
    this.items.set([]);
  }
}
