import { Component, Input } from '@angular/core';
import { Hero } from '../types/hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

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
  // @Input() heroDetails?: Hero;
  heroDetails?: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {
    this.heroDetails = undefined;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id).subscribe((hero) => (this.heroDetails = hero));
  }
}
