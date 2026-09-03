import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { App } from './app';

// Zoneless: signals drive change detection, no zone.js needed.
bootstrapApplication(App, {
  providers: [provideZonelessChangeDetection()],
}).catch((err) => console.error(err));
