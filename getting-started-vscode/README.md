# Getting Started with Angular 22 in Visual Studio Code

A minimal setup guide and the recommended VS Code workspace files for building
Angular 22 apps productively.

## What this shows

- Installing Node.js LTS and the Angular CLI
- Creating a standalone Angular 22 app with `ng new`
- The essential VS Code extensions (Angular Language Service, Prettier, ESLint)
- Running the dev server, debugging with `launch.json`, and format-on-save

## Prerequisites

- Node.js LTS (active or maintenance release) — https://nodejs.org
- npm 10+ (ships with Node.js)

## Step-by-step

1. Install the Angular CLI globally:

   ```bash
   npm install -g @angular/cli
   ng version
   ```

2. Create a new app (standalone is the default; answer the SSR and zoneless prompts):

   ```bash
   ng new my-app
   cd my-app
   ```

3. Open the project in VS Code:

   ```bash
   code .
   ```

4. Install the recommended extensions when VS Code prompts you (see
   `.vscode/extensions.json`), then add ESLint to the project:

   ```bash
   ng add @angular-eslint/schematics
   ```

5. Run the dev server and open the browser:

   ```bash
   ng serve --open
   ```

   The app is served at http://localhost:4200 and reloads on save.

6. Generate building blocks as you go:

   ```bash
   ng generate component features/dashboard
   ng generate service core/user
   ```

7. Debug: run `ng serve`, then press F5 in VS Code (see `.vscode/launch.json`).

## Recommended VS Code workspace files

Copy the `.vscode/` folder in this directory into the root of your Angular app:

- `.vscode/extensions.json` — recommends the Angular, Prettier, and ESLint extensions.
- `.vscode/settings.json` — enables format-on-save with Prettier and ESLint auto-fix.
- `.vscode/launch.json` — Chrome debug configuration for breakpoint debugging.

## Project structure (Angular 22, standalone)

```
src/
  main.ts            # bootstrapApplication(App, appConfig)
  app/
    app.config.ts    # providers: zoneless change detection, router
    app.routes.ts    # route table
    app.component.ts # standalone root component
```

Part of the GeeksArray blog: https://geeksarray.com
