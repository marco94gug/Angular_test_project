import { Component, Input } from '@angular/core';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-hero-details',
  template: `
    <div *ngIf="heroDetails">
      <h2>Details of {{ heroDetails.name | uppercase }}:</h2>
      <div><span>Id:</span> {{ heroDetails.id }}</div>
      <div><span>Name:</span> {{ heroDetails.name }}</div>
      <label for="name">
        <input type="text" id="name" [(ngModel)]="heroDetails.name" />
      </label>
    </div>
  `,
  styles: [``],
})
export class HeroDetailsComponent {
  @Input() heroDetails: Hero | undefined;

  constructor() {
    this.heroDetails = undefined;
  }
}
