import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <nav class="navbar">
      <a routerLink="./">Home</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <app-notify></app-notify>
  `,
  styles: [
    `
      .navbar {
        display: flex;
        gap: 10px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'tour-degli-eroi';
}
