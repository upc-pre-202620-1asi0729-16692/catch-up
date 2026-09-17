import { Component, signal } from '@angular/core';
import {Layout} from './shared/presentation/components/layout/layout';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [
    Layout
  ]
})
export class App {
  protected readonly title = signal('catch-up');
}
