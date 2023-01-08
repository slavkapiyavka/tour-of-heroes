import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { Hero } from "../interfaces/hero";
import { MockHeroes } from "../mock/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(MockHeroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
