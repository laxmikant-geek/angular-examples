# Angular Examples

Companion code for the Angular articles on [geeksarray.com](https://geeksarray.com/blog) — one workspace
(**Angular 22**, standalone components, signals) covering:

- **Environment setup** — this repo *is* the reference setup: `.nvmrc`, strict TypeScript + strict
  templates, Prettier, EditorConfig, and VS Code launch/debug configs
- **Component lifecycle** — `src/app/lifecycle-demo.ts`: every hook logging its real order, plus cleanup in `ngOnDestroy`
- **Components tutorial** — `src/app/app.ts` + `product-card.ts`: selectors, templates, signals
- **Directives** — `src/app/directives-demo.ts`: `@if/@for/@switch` control flow, `ngClass`/`ngStyle`/`ngModel`, and a custom `appHighlight` attribute directive
- **Nested components** — `product-card.ts`: `input.required<T>()` down, `output<T>()` up

## Prerequisites

Angular 22's CLI requires **Node `^22.22.3 || ^24.15.0 || >=26.0.0`**. This repo pins Node 24 (LTS) in
`.nvmrc`, so a version manager picks it up automatically:

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

Last verified on Angular CLI 22.1.5 / Angular 22.1.3, TypeScript 6.0, Node 26.6.0, npm 11.12.1.
