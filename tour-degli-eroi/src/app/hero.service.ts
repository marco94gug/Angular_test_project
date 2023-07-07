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

  constructor(private notify: NotifyService) {}
}
