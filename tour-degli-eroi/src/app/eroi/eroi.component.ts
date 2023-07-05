import { Component } from '@angular/core';
import { Hero } from '../hero';
import { heroesMock } from '../heroes-mock';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.scss'],
})
export class EroiComponent {
  heroes: Hero[] = heroesMock;

  selectedHero: Hero | undefined;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {
    this.selectedHero = undefined;
  }

  ngOnInit(): void {}
}
