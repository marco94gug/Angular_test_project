import { Injectable } from '@angular/core';
import { heroesMock } from './heroes-mock';

import { Hero } from './types/hero';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(heroesMock);
  }

  constructor() {}
}
