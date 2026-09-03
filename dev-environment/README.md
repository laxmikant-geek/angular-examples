# Angular 22 Development Environment — Setup Checklist

A companion to the article *Setting Up an Angular Development Environment*. Work through
this checklist to get a clean, current Angular 22 toolchain.

## Checklist

1. **Install a supported Node.js LTS** (Angular 22 supports Node 20, 22, 24).
   Use a version manager so you can switch per project:
   ```bash
   fnm install 22      # or: nvm install 22
   fnm use 22
   node -v             # should print v22.x
   ```
   This repo includes an `.nvmrc` — run `fnm use` or `nvm use` to adopt it.

2. **Pick a package manager.** npm ships with Node. To use pnpm:
   ```bash
   corepack enable
   ng config -g cli.packageManager pnpm
   ```

3. **Install the Angular CLI globally and verify:**
   ```bash
   npm install -g @angular/cli
   ng version
   ```

4. **Create a workspace.** Answer the SSR and zoneless prompts deliberately:
   ```bash
   ng new my-app
   cd my-app
   ng serve --open
   ```

5. **Set up your editor:** VS Code + the **Angular Language Service** extension,
   plus ESLint and Prettier.

## Everyday CLI commands

| Command | Purpose |
| --- | --- |
| `ng serve` | Dev server with live reload (Vite) |
| `ng build` | Optimized production bundle |
| `ng test` | Run unit tests |
| `ng generate component features/profile` | Scaffold code |
| `ng update` | Upgrade Angular across majors |

## Proxying an API in development

Use the included `proxy.conf.json` to forward `/api` calls to your backend and avoid CORS:

```bash
ng serve --proxy-config proxy.conf.json
```

## Files in this folder

- `.nvmrc` — pins the Node.js version for the team and CI.
- `proxy.conf.json` — sample dev-server proxy configuration.

Part of the GeeksArray blog: https://geeksarray.com
