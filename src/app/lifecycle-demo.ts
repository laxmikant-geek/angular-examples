import { Component, Input, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges, signal } from '@angular/core';

// Every hook logs, so the console shows the real order:
// constructor -> ngOnChanges -> ngOnInit -> ngAfterViewInit -> (ngOnChanges on input change) -> ngOnDestroy
@Component({
  selector: 'app-lifecycle-demo',
  template: `
    <div class="card">
      <h3>Lifecycle demo</h3>
      <p>Watching product: {{ productId }}</p>
      <p>Events seen: {{ log().length }}</p>
      <ol>
        @for (entry of log(); track $index) { <li>{{ entry }}</li> }
      </ol>
    </div>
  `,
})
export class LifecycleDemo implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input({ required: true }) productId!: number;
  readonly log = signal<string[]>([]);
  private timer?: ReturnType<typeof setInterval>;

  constructor() { this.record('constructor — DI done, inputs NOT set yet'); }

  ngOnChanges(changes: SimpleChanges): void {
    const c = changes['productId'];
    this.record(`ngOnChanges — productId ${c.previousValue ?? 'unset'} -> ${c.currentValue}`);
  }

  ngOnInit(): void {
    this.record('ngOnInit — inputs ready; fetch data, start subscriptions here');
    this.timer = setInterval(() => {}, 60_000);
  }

  ngAfterViewInit(): void {
    this.record('ngAfterViewInit — the DOM below me exists now');
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);            // the hook that prevents leaks
    console.log('ngOnDestroy — cleanup ran');
  }

  private record(entry: string): void {
    console.log(entry);
    this.log.update(list => [...list, entry]);
  }
}
