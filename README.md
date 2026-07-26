# Angular Examples

Companion code for the Angular articles on [geeksarray.com](https://geeksarray.com/blog) — one workspace (Angular 20, standalone components, signals) covering:

- **Component lifecycle** — `src/app/lifecycle-demo.ts`: every hook logging its real order, plus cleanup in `ngOnDestroy`
- **Components tutorial** — `src/app/app.ts` + `product-card.ts`: selectors, templates, signals
- **Directives** — `src/app/directives-demo.ts`: `@if/@for/@switch` control flow, `ngClass`/`ngStyle`/`ngModel`, and a custom `appHighlight` attribute directive
- **Nested components** — `product-card.ts`: `input.required<T>()` down, `output<T>()` up

```bash
npm install
ng serve      # http://localhost:4200
```
