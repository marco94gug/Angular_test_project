import { Component } from '@angular/core';
import { Hero } from '../types/hero';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-eroi',
  template: `
    <h2>My Heros</h2>
    <ul class="heroes">
      <li
        [class.selected]="hero === selectedHero"
        *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
      >
        <span class="badge">{{ hero.id }}</span>
        {{ hero.name }}
      </li>
    </ul>
    <app-hero-details [heroDetails]="selectedHero"></app-hero-details>
  `,
  styles: [
    `
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
        li {
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          left: 0;
          background-color: #eee;
          margin: 0.5em;
          padding: 0.3em 0;
          height: 1.6em;
          border-radius: 4px;

          span {
            align-self: flex-start;
          }

          &:hover {
            color: #607d8b;
            background-color: #ddd;
            left: 0.1em;
          }

          &.selected {
            background-color: #cfd8dc;
            color: white;

            &:hover {
              background-color: #bbd8dc;
              color: white;
            }
          }
        }

        .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #405061;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: 0.8em;
          border-radius: 4px 0 0 4px;
        }
      }
    `,
  ],
})
export class EroiComponent {
  heroes: Hero[] | undefined;
  subscriptions: Subscription | undefined;

  selectedHero: Hero | undefined;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {
    this.selectedHero = undefined;
  }

  ngOnInit(): void {
    this.subscriptions = this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
