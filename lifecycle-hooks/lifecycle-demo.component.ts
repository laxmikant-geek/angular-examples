import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  input,
  computed,
  effect,
  inject,
  DestroyRef,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

/**
 * A standalone Angular 22 component that logs every lifecycle hook,
 * demonstrates signal inputs (input/computed/effect) replacing ngOnChanges,
 * and shows takeUntilDestroyed + DestroyRef + afterNextRender.
 *
 * Watch the browser console to see the hooks fire in order.
 */
@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  template: `
    <section>
      <h2>Lifecycle demo</h2>
      <p>Label input: {{ label() }}</p>
      <p>Uppercased (computed): {{ shout() }}</p>
      <p>Ticks since init: {{ ticks }}</p>
    </section>
  `,
})
export class LifecycleDemoComponent
  implements
    OnChanges,
    OnInit,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  // Signal-based input (Angular 22). No @Input() decorator needed.
  readonly label = input<string>('hello');

  // computed() derives state automatically — no ngOnChanges required.
  readonly shout = computed(() => this.label().toUpperCase());

  private readonly destroyRef = inject(DestroyRef);
  ticks = 0;

  constructor() {
    // inject() only — inputs are NOT available yet here.
    console.log('constructor');

    // effect() reacts to signal changes; it cleans itself up on destroy.
    effect(() => console.log('effect: label is', this.label()));

    // takeUntilDestroyed() auto-unsubscribes when the component is torn down.
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.ticks++);

    // DestroyRef: register teardown from the constructor, no ngOnDestroy needed.
    this.destroyRef.onDestroy(() => console.log('DestroyRef.onDestroy'));

    // Render hooks run only in the browser, after the DOM is painted.
    afterNextRender(() => console.log('afterNextRender (browser only, once)'));
    afterRender(() => console.log('afterRender (browser only, every render)'));
  }

  // Only fires for decorator @Input()s; shown here for completeness.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    // Inputs are ready here.
    console.log('ngOnInit — label is', this.label());
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked (keep this cheap)');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked (keep this cheap)');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
