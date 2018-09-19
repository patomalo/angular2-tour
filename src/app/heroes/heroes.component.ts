import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { headersToString } from 'selenium-webdriver/http';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    time: new Date()
  };
  constructor(private heroService: HeroService) { }

  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
                    .subscribe(result => this.heroes = result);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
