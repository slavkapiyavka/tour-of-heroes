import { Component } from '@angular/core';
import { Hero } from "../../shared/interfaces/hero";
import { MockHeroes } from "../../shared/mock/mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {
  selectedHero?: Hero;
  heroes = MockHeroes;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
