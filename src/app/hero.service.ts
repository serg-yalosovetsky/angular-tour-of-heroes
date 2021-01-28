import { MessageService } from './message.service';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
     // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }
}
