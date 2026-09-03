# Angular 22 Nested Components — input() / output() / model()

A minimal, standalone example showing how a parent and a nested child component
talk to each other in Angular 22:

- `product.model.ts` — the `Product` interface.
- `cart.service.ts` — a signal-based service, resolved with `inject()`.
- `product-card.component.ts` — the **child**: `input.required<Product>()` (data down),
  `output<Product>()` (events up), `model<number>()` (two-way `[(quantity)]`),
  an input `transform`, and `<ng-content>` projection.
- `product-list.component.ts` — the **parent**: renders the children with the new
  `@for` / `@if` control flow and listens for the `addToCart` output.

## Drop-in

Copy the four `.ts` files into your Angular 22 app (any folder) and render the parent:

```html
<app-product-list />
```

Bootstrap it the standalone way in `main.ts`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductListComponent } from './product-list.component';

bootstrapApplication(ProductListComponent);
```

No `NgModule` is required — every component here is standalone. Requires Angular 22+.

Part of the GeeksArray blog: https://geeksarray.com
