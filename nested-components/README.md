# Angular 19 Nested Components — input() and output()

A minimal, standalone example showing parent/child (nested) component
communication in **Angular 19** using the modern signal-based APIs:

- `input.required<Product>()` — pass data **down** from parent to child.
- `output<Product>()` + `.emit()` — send events **up** from child to parent.
- `model<number>()` — genuine **two-way** binding with `[(qty)]`.
- `@for` / `@if` / `@empty` — the new built-in template control flow.

These replace the older `@Input()` / `@Output()` decorators and
`*ngFor` / `*ngIf` structural directives (which still work, but are legacy).

## Files

| File | Role |
| --- | --- |
| `product.model.ts` | Shared `Product` interface |
| `product-card.component.ts` | Child — receives `product` input, raises `added` output |
| `parent.component.ts` | Parent — renders a list with `@for`, handles `added` |
| `quantity.component.ts` | Two-way binding demo with `model()` |

## How to drop these into an Angular 19 app

1. Create an app if you don't have one:

   ```bash
   npm install -g @angular/cli@19
   ng new my-app
   cd my-app
   ```

2. Copy the four `.ts` files into `src/app/` (e.g. `src/app/nested/`).

3. Render the parent from your root component (also standalone):

   ```typescript
   // src/app/app.component.ts
   import { Component } from '@angular/core';
   import { ProductListComponent } from './nested/parent.component';

   @Component({
     selector: 'app-root',
     standalone: true,
     imports: [ProductListComponent],
     template: `<app-product-list />`,
   })
   export class AppComponent {}
   ```

4. Run it:

   ```bash
   ng serve
   ```

Open http://localhost:4200 — click **Add to cart** on an in-stock product
and watch the parent's cart counter update via the `output()` event.

Part of the GeeksArray blog: https://geeksarray.com
