import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemom } from '../models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {


  pokeName: string = "";

  constructor(private httpClient: HttpClient) { }

  /* 
    What is RxJS?
      - RxJS is a framework for reactive programming. RxJS uses the idea of an observable
          (reactive programming deals with the idea of data streams)
    What is an observable?
      essentially a publisher of a stream of values
      - the observable will publish values to whoever subscribes to it.
      - if the data changes, the observable will notify the subscribers of that change
    What is an observer?
      - observers will execute some code when a new value occurs from the observable
      - an observer connects to an observable with .subscribe(cbf)
  */

      //Observables
    getOnePokemon(){
      return this.httpClient.get<Pokemom>(`https://pokeapi.co/api/v2/pokemon/${this.pokeName}`);
    }

    getAllPokemon(){
      return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1181');
    }

}
