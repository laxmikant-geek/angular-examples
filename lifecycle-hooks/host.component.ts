import { Component, signal } from '@angular/core';
import { LifecycleDemoComponent } from './lifecycle-demo.component';

/**
 * Host that mounts/unmounts the demo and updates its signal input,
 * so you can watch ngOnChanges/effect and ngOnDestroy fire in the console.
 */
@Component({
  selector: 'app-host',
  standalone: true,
  imports: [LifecycleDemoComponent],
  template: `
    <button (click)="mounted.set(!mounted())">
      {{ mounted() ? 'Destroy' : 'Create' }} component
    </button>
    <button (click)="label.set(label() + '!')">Change input</button>

    @if (mounted()) {
      <app-lifecycle-demo [label]="label()" />
    }
  `,
})
export class HostComponent {
  readonly mounted = signal(true);
  readonly label = signal('hello');
}
