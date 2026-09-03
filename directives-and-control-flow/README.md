# Angular 22 — Directives and Control Flow

A minimal, self-contained sample for the GeeksArray article on Angular directives and
the built-in control flow.

## What it shows

- `highlight.directive.ts` — a custom **attribute directive** built with a signal
  `input()` and `host` bindings/listeners (no `@HostBinding`/`@HostListener` decorators).
- `tasks.component.ts` — a standalone component that uses the new built-in control flow:
  `@if` / `@else`, `@for` with the **required `track`** expression and an `@empty` block,
  `@switch`, and the `@let` template variable. It also applies the custom directive.

## Requirements

- Angular 22, standalone components (no NgModules).

## Drop-in

Copy both files into an Angular 22 app (for example under `src/app/`) and render the
component from your root template or route:

```html
<ga-tasks />
```

Both files are standalone, so no module wiring is needed — the component imports the
directive directly.

## Migrating legacy templates

If your codebase still uses `*ngIf`, `*ngFor`, or `*ngSwitch`, migrate them to the new
control flow automatically:

```bash
ng generate @angular/core:control-flow
```

Part of the GeeksArray blog: https://geeksarray.com
