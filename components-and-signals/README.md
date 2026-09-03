# Angular 22 — Components and Signals

A small, self-contained example that shows standalone components and signal-based
state in **Angular 22**:

- `counter.ts` — a `Counter` component using `signal()`, `computed()`, and `effect()`.
- `product-list.ts` — a `ProductList` component using signals, `@if`/`@for` control
  flow with `track`, and `.update()` for immutable state changes.
- `app.ts` — the standalone root component that imports both.
- `main.ts` — bootstraps the app with `bootstrapApplication` and
  `provideZonelessChangeDetection()` (no zone.js).

## Run it

These are drop-in component files. To try them in a fresh workspace:

```bash
# 1. Create a new Angular 22 app (standalone + zoneless by default)
npm install -g @angular/cli
ng new signals-demo
cd signals-demo

# 2. Copy the files from this folder into src/app/
#    (counter.ts, product-list.ts, app.ts) and replace src/main.ts

# 3. Start the dev server
ng serve
```

Open http://localhost:4200. Click the counter buttons and "Add product" — only the
affected DOM updates, driven entirely by signals.

Requires Node.js 20+ and Angular CLI 22.

Part of the GeeksArray blog: https://geeksarray.com
