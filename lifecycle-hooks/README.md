# Angular 22 Lifecycle Hooks — Demo

A small, self-contained set of standalone components that log every Angular
lifecycle hook so you can watch the exact order they fire in the browser console.

## What it shows

- `constructor` vs `ngOnInit` — inject in the constructor, initialize in `ngOnInit`.
- Signal inputs (`input()`), `computed()`, and `effect()` replacing `ngOnChanges`.
- `ngOnDestroy`, plus the modern `DestroyRef.onDestroy()` and `takeUntilDestroyed()`.
- Content and view hooks, including the `Checked` variants.
- The render hooks `afterNextRender()` and `afterRender()` for browser-only DOM work.

## Files

- `lifecycle-demo.component.ts` — the component that logs each hook.
- `host.component.ts` — mounts/unmounts the demo and changes its input, so you can
  trigger create, update, and destroy.

## How to drop it into an Angular 22 app

1. Create an app if you don't have one:

   ```bash
   npm install -g @angular/cli@22
   ng new lifecycle-playground
   cd lifecycle-playground
   ```

2. Copy `lifecycle-demo.component.ts` and `host.component.ts` into `src/app/`.

3. Bootstrap the host (or add `<app-host />` to your root template). In a
   standalone `main.ts`:

   ```typescript
   import { bootstrapApplication } from '@angular/platform-browser';
   import { HostComponent } from './app/host.component';

   bootstrapApplication(HostComponent);
   ```

4. Run it and open DevTools:

   ```bash
   ng serve
   ```

Click "Create/Destroy component" and "Change input" and watch the console log the
hooks in order.

## Requirements

- Angular 22, standalone components (default, no NgModules).
- No extra dependencies beyond `@angular/core` and `rxjs`.

---

Part of the GeeksArray blog: https://geeksarray.com
