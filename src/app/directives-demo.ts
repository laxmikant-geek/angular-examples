import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

// Structural control flow (@if/@for/@switch — the modern *ngIf/*ngFor),
// attribute directives (ngClass/ngStyle/ngModel), and a custom directive.
@Component({
  selector: 'app-directives-demo',
  imports: [CommonModule, FormsModule, HighlightDirective],
  template: `
    <div class="card">
      <h3>Directives demo</h3>

      <label><input type="checkbox" [(ngModel)]="showSoldOut" /> show sold-out</label>

      <ul>
        @for (p of visibleProducts(); track p.sku) {
          <li appHighlight="#d3f9d8"
              [ngClass]="{ 'sold-out': p.stock === 0 }"
              [ngStyle]="{ fontWeight: p.stock === 0 ? '400' : '600' }">
            {{ p.name }} — {{ p.stock }} left
          </li>
        } @empty {
          <li>No products match.</li>
        }
      </ul>

      @switch (status()) {
        @case ('loading') { <p>Loading…</p> }
        @case ('ready')   { <p>{{ visibleProducts().length }} products shown</p> }
        @default          { <p>Something went wrong.</p> }
      }
    </div>
  `,
  styles: [`.sold-out { color: #adb5bd; text-decoration: line-through; }`],
})
export class DirectivesDemo {
  showSoldOut = true;
  readonly status = signal<'loading' | 'ready' | 'error'>('ready');

  private readonly products = [
    { sku: 'A-100', name: 'Mechanical keyboard', stock: 14 },
    { sku: 'B-200', name: '4K monitor', stock: 6 },
    { sku: 'C-300', name: 'USB-C dock', stock: 0 },
  ];

  visibleProducts() {
    return this.showSoldOut ? this.products : this.products.filter(p => p.stock > 0);
  }
}
