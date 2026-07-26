import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

// Custom attribute directive: highlight the host element on hover.
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly appHighlight = input<string>('#fff3bf');   // configurable color

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight();
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
