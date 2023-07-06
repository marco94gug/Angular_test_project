import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-eroi></app-eroi>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'tour-degli-eroi';
}
