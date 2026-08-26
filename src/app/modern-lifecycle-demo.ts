import { Component, DestroyRef, computed, effect, inject, input, signal } from '@angular/core';

// The same job as lifecycle-demo, written the way Angular 22 encourages:
// no ngOnChanges (a computed reacts to the input), no ngOnDestroy
// (DestroyRef registers cleanup), no OnInit (a signal input is ready immediately).
@Component({
  selector: 'app-modern-lifecycle-demo',
  template: `
    <div class="card">
      <h3>Same component, no lifecycle interfaces</h3>
      <p>Watching product: {{ productId() }} ({{ label() }})</p>
      <p>Ticks since created: {{ ticks() }}</p>
    </div>
  `,
})
export class ModernLifecycleDemo {
  readonly productId = input.required<number>();

  // Replaces ngOnChanges: derived from the input, recalculated when it changes.
  readonly label = computed(() => (this.productId() % 2 === 0 ? 'even id' : 'odd id'));

  readonly ticks = signal(0);

  constructor() {
    // Replaces ngOnInit for input-driven work: runs once inputs are available
    // and again whenever what it reads changes.
    effect(() => console.log(`[modern] now watching product ${this.productId()}`));

    const timer = setInterval(() => this.ticks.update(t => t + 1), 1000);

    // Replaces ngOnDestroy — cleanup registered next to the thing it cleans up.
    inject(DestroyRef).onDestroy(() => {
      clearInterval(timer);
      console.log('[modern] DestroyRef cleanup ran');
    });
  }
}
