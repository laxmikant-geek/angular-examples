# Angular Examples

Companion code for the **Angular Essentials** series on [geeksarray.com](https://geeksarray.com/blog) —
one workspace on **Angular 22**, standalone components and signals throughout.

Every file here is referenced by an article in the series:

| Article | Files |
|---|---|
| [Setting up the environment](https://geeksarray.com/blog/setting-up-development-environment-for-angular-applications) | `.nvmrc`, `tsconfig.json` (strict + strictTemplates), `.prettierrc` |
| [Angular in VS Code](https://geeksarray.com/blog/getting-started-with-angular-and-visual-studio-code) | `.vscode/launch.json`, `tasks.json`, `extensions.json` |
| [Components and signals](https://geeksarray.com/blog/angular-components-tutorial) | `app.ts`, `signals-demo.ts`, `cart-store.ts` |
| [Directives](https://geeksarray.com/blog/angular-directives-overview-with-example) | `directives-demo.ts`, `highlight.directive.ts` |
| [Nested components](https://geeksarray.com/blog/angular-nested-component-with-input-and-output-decorator) | `product-card.ts`, `quantity-picker.ts`, `cart-store.ts` |
| [Lifecycle hooks](https://geeksarray.com/blog/angular-component-lifecycle) | `lifecycle-demo.ts`, `modern-lifecycle-demo.ts` |

## What each demo shows

- **`signals-demo.ts`** — `signal()`, `computed()` chains (subtotal → GST → total), `effect()` for side
  effects, and an injected signal service
- **`cart-store.ts`** — shared state as a `@Injectable` holding signals, with `asReadonly()` and `computed()`
- **`quantity-picker.ts`** — `model.required<number>()` for real two-way binding (`[(quantity)]`)
- **`product-card.ts`** — `input.required<T>()` down, `output<T>()` up
- **`directives-demo.ts`** — `@if/@for/@switch` control flow, `ngClass`/`ngStyle`/`ngModel`, custom `appHighlight`
- **`lifecycle-demo.ts`** — every classic hook logging its real firing order
- **`modern-lifecycle-demo.ts`** — the same component with *no* lifecycle interfaces: signal input,
  `computed()` instead of `ngOnChanges`, `DestroyRef.onDestroy()` instead of `ngOnDestroy`

## Prerequisites

Angular 22's CLI requires Node `^22.22.3 || ^24.15.0 || >=26.0.0`. This repo pins Node 24 (LTS) in `.nvmrc`:

```bash
nvm use          # reads .nvmrc
node --version   # v24.x
```

## Run it

```bash
npm install
npm start        # ng serve → http://localhost:4200
npm run build    # production build to dist/
npm test         # vitest unit tests
```

## Verified toolchain

Last verified on Angular CLI 22.1.5 / Angular 22.1.3, TypeScript 6.0, Node 26.6.0, npm 11.12.1 —
`ng build` 274 kB initial, `ng test` 2/2 passing.
