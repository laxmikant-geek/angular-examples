import { Component, computed, signal } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

interface Task {
  id: number;
  title: string;
  status: 'active' | 'paused' | 'done';
}

@Component({
  selector: 'ga-tasks',
  standalone: true,
  imports: [HighlightDirective],
  template: `
    <h2>Tasks (Angular 22 control flow)</h2>

    <!-- @let: reactive, read-only template variable -->
    @let count = tasks().length;
    <p gaHighlight="lightyellow">You have {{ count }} task(s).</p>

    @if (count > 0) {
      <ul>
        @for (task of tasks(); track task.id) {
          <li gaHighlight="lightgreen">
            {{ task.title }} —
            @switch (task.status) {
              @case ('active') { <strong>active</strong> }
              @case ('paused') { <em>paused</em> }
              @default { done }
            }
          </li>
        } @empty {
          <li>No tasks yet.</li>
        }
      </ul>
    } @else {
      <p>Nothing to show.</p>
    }

    <p>Active: {{ activeCount() }}</p>
    <button (click)="add()">Add task</button>
  `,
})
export class TasksComponent {
  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Write article', status: 'active' },
    { id: 2, title: 'Review PR', status: 'paused' },
    { id: 3, title: 'Ship release', status: 'done' },
  ]);

  readonly activeCount = computed(
    () => this.tasks().filter((t) => t.status === 'active').length,
  );

  add(): void {
    const next = this.tasks().length + 1;
    this.tasks.update((list) => [
      ...list,
      { id: next, title: `New task ${next}`, status: 'active' },
    ]);
  }
}
