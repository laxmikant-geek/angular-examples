import { Component } from '@angular/core';
import { Counter } from './counter';
import { ProductList } from './product-list';

@Component({
  selector: 'app-root',
  imports: [Counter, ProductList],
  template: `
    <app-counter />
    <app-product-list />
  `,
})
export class App {}
