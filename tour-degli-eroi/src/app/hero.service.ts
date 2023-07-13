import { Injectable } from '@angular/core';
import { heroesMock } from './heroes-mock';

import { Hero } from './types/hero';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.notify.add('Heroes Added!');
    return of(heroesMock);
  }

  getHero(id: number): Observable<Hero> {
    this.notify.add('Hero Added!' + id);

    const hero = heroesMock.find((hero) => hero.id === id);

    return of(hero!);
  }

  constructor(private notify: NotifyService) {}
}
