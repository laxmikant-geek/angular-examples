import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter</h2>
    <button (click)="dec()">-</button>
    <span>{{ count() }}</span>
    <button (click)="inc()">+</button>
    <p>Doubled: {{ doubled() }}</p>
  `,
})
export class Counter {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  constructor() {
    // Side effect: runs whenever count changes.
    effect(() => console.log('count is', this.count()));
  }

  inc(): void {
    this.count.update((n) => n + 1);
  }

  dec(): void {
    this.count.update((n) => n - 1);
  }
}
