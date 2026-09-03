import { Directive, ElementRef, inject, input, signal } from '@angular/core';

/**
 * Custom attribute directive.
 * Highlights its host element while the pointer is over it.
 * Usage: <p gaHighlight="lightgreen">…</p>
 */
@Directive({
  selector: '[gaHighlight]',
  host: {
    '(mouseenter)': 'hovering.set(true)',
    '(mouseleave)': 'hovering.set(false)',
    '[style.background-color]': 'hovering() ? color() : ""',
    '[style.transition]': '"background-color .15s ease"',
    '[style.cursor]': '"default"',
  },
})
export class HighlightDirective {
  /** Signal-based input; aliased so you can bind it on the selector attribute. */
  readonly color = input('yellow', { alias: 'gaHighlight' });

  private readonly hovering = signal(false);

  // Injected for illustration — direct DOM access when you need it.
  private readonly el = inject(ElementRef<HTMLElement>);
}
