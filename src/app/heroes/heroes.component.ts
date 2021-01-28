import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[];
  //heroes = HEROES.push(this.hero);

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent : Selected hero id=${hero.id}');

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log('init')
  }

}
